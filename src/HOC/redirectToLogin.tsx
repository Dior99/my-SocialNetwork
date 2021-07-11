import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function redirectToLogin<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: MapStatePropsType) {
        let {isAuth, ...restProps} = props

        if(!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}