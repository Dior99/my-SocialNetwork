import {v1} from "uuid";
import {profileReducer} from "./profile-reducer";
import {messageReducer} from "./message-reducer";

export const AvatarPost = "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"
export const AvatarFriends = "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"

export type PostType = {
    id: string
    title: string
    likes: number
    avatar: typeof AvatarPost
}
export type MessageType = {
    id: string
    title: string
    name: string
    avatar: typeof AvatarFriends
}
export type DialogType = {
    id: string
    name: string
    avatar: typeof AvatarFriends
}
export type ProfilePageType = {
    post: Array<PostType>
    newPostText: string
}
export type MessagePageType = {
    message: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}
export type StoreType = {
    _state: StateType
    _changedState: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: any) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {id: v1(), title: 'Post 1', likes: 5, avatar: AvatarPost},
                {id: v1(), title: 'Post 2', likes: 15, avatar: AvatarPost},
                {id: v1(), title: 'Post 3', likes: 25, avatar: AvatarPost},
            ],
            newPostText: "Hello",
        },
        messagePage: {
            message: [
                {id: v1(), title: "Hello", name: "Kristina", avatar: AvatarFriends},
                {id: v1(), title: "How are your?", name: "Kristina", avatar: AvatarFriends},
                {id: v1(), title: "Hello, I am fine", name: "Kolya", avatar: AvatarFriends},
            ],
            newMessageText: "Hello",
            dialogs: [
                {id: v1(), name: 'Kolya', avatar: AvatarFriends},
                {id: v1(), name: 'Kristina', avatar: AvatarFriends},
                {id: v1(), name: 'Misha', avatar: AvatarFriends},
                {id: v1(), name: 'Alisa', avatar: AvatarFriends},
                {id: v1(), name: 'Eva', avatar: AvatarFriends},
            ],
        }
    },
    _changedState() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._changedState = observer
    },

    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)
        this._changedState()
    }
}





