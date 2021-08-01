import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getProfile, getStatus, ProfileType, updateStatus} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";

type MapStateProps = {
    profile: ProfileType | null
    userId: null | string
    isAuth: boolean
}
type MapDispatchProps = {
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

type ParamsProfilePropsType = {
    userId: string
}

export type ProfilePropsType = RouteComponentProps<ParamsProfilePropsType> & MapStateProps & MapDispatchProps

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId as string;
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (<Profile {...this.props}
                         profile={this.props.profile}
                         updateStatus={this.props.updateStatus}/>)
    }
}

const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        profile: state.profilePage.profile,
        userId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

let routerProfileContainer = withRouter(ProfileContainer);


export default compose<ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    //redirectToLogin
)(routerProfileContainer)


