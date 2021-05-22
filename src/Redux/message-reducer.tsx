import {AvatarFriends, MessagePageType, MessageType} from "./State";
import {v1} from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
type UpdateMessageTextActionType = {
    type: "UPDATE-MESSAGE-TEXT"
    newText: string
}

export type MessageReducerActionType = AddMessageActionType | UpdateMessageTextActionType

 export const messageReducer = (state: MessagePageType, action: MessageReducerActionType) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage: MessageType = {
            id: v1(),
            title: state.newMessageText,
            name: "Kolya",
            avatar: AvatarFriends
        }
        if (newMessage.title.trim() !== "") {
            state.message.push(newMessage)
            state.newMessageText = ''
        }
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
        state.newMessageText = action.newText;
    }
        return state

}

export const addMessageAC = (): AddMessageActionType => ({
    type: ADD_MESSAGE
})
export const updateMessageTextAC = (newMessage: string): UpdateMessageTextActionType => ({
    type: UPDATE_MESSAGE_TEXT,
    newText: newMessage
})