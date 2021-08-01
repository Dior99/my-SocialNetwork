import {authAPI} from "../API/api";
import {AppStateType} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {FormAction, stopSubmit} from "redux-form";

enum AUTH_ACTION_TYPE {
    SET_USER_DATA = "AUTH/SET-USER-DATA"
}

type SetUserData = {
    type: AUTH_ACTION_TYPE.SET_USER_DATA
    data: {
        id: null | string
        login: null | string
        email: null | string
        isAuth: boolean
    }

};

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

export type InitialStateType = typeof initialState;

type AuthActionType = SetUserData;

export const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case AUTH_ACTION_TYPE.SET_USER_DATA:
            return {...state, ...action.data} as InitialStateType;
        default:
            return state;
    }
}

export const setUserData = (email: null | string, id: null | string, login: null | string, isAuth: boolean): SetUserData =>
    ({type: AUTH_ACTION_TYPE.SET_USER_DATA, data: {email, id, login, isAuth}});

export const setLoginUser = () =>
    (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionType>) => {
        authAPI.getAuth()
            .then(response => {
                if (response.resultCode === 0) {
                    let {email, id, login} = response.data
                    dispatch(setUserData(email, id, login, true))
                }
            })
    }

export const login = (email: string, password: string, rememberMe: boolean) =>
    (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionType | FormAction>) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setLoginUser())
                } else {
                    let message = response.messages.length > 0 ? response.messages : "Some error"
                    dispatch(stopSubmit("login", {_error: message}))
                }

            })
    }

export const logout = () =>
    (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionType>) => {
        authAPI.logout()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
            })
    }


