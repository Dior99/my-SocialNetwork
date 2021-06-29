import React from 'react';
import {connect} from "react-redux";
import { Header } from './Header';
import {AppStateType} from "../../Redux/redux-store";
import {setUserData} from "../../Redux/auth-reducer";
import axios from "axios";

type MapStatePropsType = {
    login: null
    isAuth: boolean
}

type MapDispatchPropsType = {
    setUserData: (email: null, id: null, login: null) => void
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType>{
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
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

export default connect(mapStateToProps, {setUserData}) (HeaderContainer)


