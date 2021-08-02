import {AppStateType} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {setLoginUser} from "./auth-reducer";

enum AUTH_ACTION_TYPE {
    SET_INITIALIZED = "APP/SET-INITIALIZED"
}

type SetInitialized = {
    type: AUTH_ACTION_TYPE.SET_INITIALIZED
};

const initialState = {
    initialized: false
};

export type InitialStateType = typeof initialState;

type AppActionType = SetInitialized;

export const appReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case AUTH_ACTION_TYPE.SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state;
    }
}

export const setInitialized = (): SetInitialized =>
    ({type: AUTH_ACTION_TYPE.SET_INITIALIZED});

export const initialize = (dispatch: ThunkDispatch<AppStateType, unknown, AppActionType>) => {
    const promise = dispatch(setLoginUser)

    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized)
        })
    }
