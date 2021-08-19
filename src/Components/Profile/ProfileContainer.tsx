import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getProfile, getStatus, ProfileType, savePhoto, updateStatus} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";
import {redirectToLogin} from "../../HOC/redirectToLogin";

type MapStateProps = {
    profile: ProfileType | null
    userId: null | number
    isAuth: boolean
    status: string
}

type MapDispatchProps = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (photo: File) => void
}

type ParamsProfilePropsType = {
    userId: string
}

export type ProfilePropsType = RouteComponentProps<ParamsProfilePropsType> & MapStateProps & MapDispatchProps

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    refreshProfile() {
        let userId: number | null = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.userId;
            if(!userId) {
                this.props.history.push('/login')
            }
        }

        if(typeof userId === "number") {
            this.props.getProfile(userId)
            this.props.getStatus(userId)
        }
    }

    render() {
        return (<Profile profile={this.props.profile}
                         savePhoto={this.props.savePhoto}
                         status={this.props.status}
                         isOwner={!this.props.match.params.userId}
                         updateStatus={this.props.updateStatus}/>)
    }
}

const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        profile: state.profilePage.profile,
        userId: state.auth.id,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    redirectToLogin
)(ProfileContainer)


