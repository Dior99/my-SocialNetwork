import React from 'react';
import s from './Message.module.css';
import {MyDialogs} from "./Dialogs/MyDialogs";
import {MessageItems} from "./MessageItems/MessageItems";
import {MessagePageType} from "../../Redux/State";

type MessagePropsType = {
    messageState: MessagePageType
    addMessage: () => void
    updateMessageText: (newText: string) => void
}

export function Message(props: MessagePropsType) {
    return (
        <div>
            <div className={s.message}>
                <MessageItems messageState={props.messageState.message}
                              newMessageText={props.messageState.newMessageText}
                              addMessage={props.addMessage}
                              updateMessageText={props.updateMessageText}/>
                <MyDialogs dialogsState={props.messageState.dialogs}/>
            </div>
        </div>
    )
}


