import {addMessageAC, MessageType, updateMessageTextAC} from "../../../Redux/message-reducer";
import {MessageItems} from "./MessageItems";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../Redux/redux-store";

type MapStateToPropsType = {
    messages: Array<MessageType>
    newMessageText: string
}

type MapDispatchToPropsType = {
    addMessage: () => void
    updateMessageText: (text: string) => void
}

export type MessagePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messages: state.messagePage.message,
        newMessageText: state.messagePage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC());
        },
        updateMessageText: (text: string) => {
            dispatch(updateMessageTextAC(text))
        }
    }
}

export const MessageItemsContainer = connect(mapStateToProps, mapDispatchToProps) (MessageItems)

