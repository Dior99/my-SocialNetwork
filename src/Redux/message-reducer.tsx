import {v1} from "uuid";

export const AvatarFriends = "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
type UpdateMessageTextActionType = {
    type: "UPDATE-MESSAGE-TEXT"
    newText: string
}

export type MessageActionType = AddMessageActionType | UpdateMessageTextActionType

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

const initialState = {
    message: [
        {id: v1(), title: "Hello", name: "Kristina", avatar: AvatarFriends},
        {id: v1(), title: "How are your?", name: "Kristina", avatar: AvatarFriends},
        {id: v1(), title: "Hello, I am fine", name: "Kolya", avatar: AvatarFriends},
    ] as Array<MessageType>,
    newMessageText: "Hello",
    dialogs: [
        {id: v1(), name: 'Kolya', avatar: AvatarFriends},
        {id: v1(), name: 'Kristina', avatar: AvatarFriends},
        {id: v1(), name: 'Misha', avatar: AvatarFriends},
        {id: v1(), name: 'Alisa', avatar: AvatarFriends},
        {id: v1(), name: 'Eva', avatar: AvatarFriends},
    ] as Array<DialogType>,
}

export type InitialStateType = typeof initialState

export const messageReducer = (state: InitialStateType = initialState, action: MessageActionType): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {
                id: v1(),
                title: state.newMessageText,
                name: "Kolya",
                avatar: AvatarFriends
            }
            if (newMessage.title.trim() !== "") {
                return {
                    ...state,
                    newMessageText: '',
                    message: [...state.message, newMessage]
                }
            }
            return state
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
    }
    return state

}

export const addMessage = (): AddMessageActionType => ({
    type: ADD_MESSAGE
})
export const updateMessageText = (newMessage: string): UpdateMessageTextActionType => ({
    type: UPDATE_MESSAGE_TEXT,
    newText: newMessage
})