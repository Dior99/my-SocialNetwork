import {addMessage, MessageType} from "../../../Redux/message-reducer";
import {MessageItems} from "./MessageItems";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../../Redux/redux-store";
import {redirectToLogin} from "../../../HOC/redirectToLogin";
import {ComponentType} from "react";

type MapStateToPropsType = {
    messages: Array<MessageType>
}

type MapDispatchToPropsType = {
    addMessage: (newMessage: string) => void
}

export type MessagePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messages: state.messagePage.message,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {addMessage}),
    redirectToLogin
)(MessageItems)

