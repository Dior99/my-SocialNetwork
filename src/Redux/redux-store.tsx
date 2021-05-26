import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messageReducer} from "./message-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store

export const store = createStore(rootReducer)