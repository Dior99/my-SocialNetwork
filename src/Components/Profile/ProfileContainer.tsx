import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {profileAPI} from "../../API/api";

type MapStateProps = {
    profile: ProfileType | null
}
type MapDispatchProps = {
    setUserProfile: (profile: ProfileType | null) => void
}

type ParamsProfilePropsType = {
    userId: string
}

export type ProfilePropsType = RouteComponentProps<ParamsProfilePropsType> & MapStateProps & MapDispatchProps

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }
        profileAPI.getProfile(userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }
}

const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        profile: state.profilePage.profile
    }
}

let routerProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(routerProfileContainer)


