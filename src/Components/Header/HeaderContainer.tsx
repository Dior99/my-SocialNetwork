import React from 'react';
import {connect} from "react-redux";
import {Header} from './Header';
import {AppStateType} from "../../Redux/redux-store";
import {logout, setLoginUser} from "../../Redux/auth-reducer";

type MapStatePropsType = {
    login: null
    isAuth: boolean
}

type MapDispatchPropsType = {
    setLoginUser: () => void
    logout: () => void
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setLoginUser, logout})(HeaderContainer)


