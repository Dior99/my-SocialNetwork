import {addMessage, MessageType, updateMessageText} from "../../../Redux/message-reducer";
import {MessageItems} from "./MessageItems";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../../Redux/redux-store";
import {redirectToLogin} from "../../../HOC/redirectToLogin";
import {ComponentType} from "react";

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

export default compose<ComponentType>(
    connect(mapStateToProps, {addMessage, updateMessageText}),
    //redirectToLogin
)(MessageItems)

