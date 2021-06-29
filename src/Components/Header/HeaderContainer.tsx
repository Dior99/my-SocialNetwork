import React from 'react';
import {connect} from "react-redux";
import {Header} from './Header';
import {AppStateType} from "../../Redux/redux-store";
import {setUserData} from "../../Redux/auth-reducer";
import {authAPI} from "../../API/api";

type MapStatePropsType = {
    login: null
    isAuth: boolean
}

type MapDispatchPropsType = {
    setUserData: (email: null, id: null, login: null) => void
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {email, id, login} = data.data
                    this.props.setUserData(email, id, login)
                }
            })
    }

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

export default connect(mapStateToProps, {setUserData})(HeaderContainer)


