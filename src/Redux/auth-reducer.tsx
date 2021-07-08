enum AUTH_ACTION_TYPE {
    SET_USER_DATA = "AUTH/SET-USER-DATA"
}

type SetUserData = {
    type: AUTH_ACTION_TYPE.SET_USER_DATA
    data: {
        id: null | string
        login: null | string
        email: null | string
    }
};

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

export type InitialStateType = typeof initialState;

type ActionType = SetUserData;

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case AUTH_ACTION_TYPE.SET_USER_DATA:
            return {...state, ...action.data, isAuth: true} as InitialStateType;
        default:
            return state;
    }
}

export const setUserData = (email: null | string, id: null | string, login: null | string): SetUserData => ({type: AUTH_ACTION_TYPE.SET_USER_DATA, data: {email, id, login}});