import React from 'react';
import s from './Message.module.css';
import {MyDialogs} from "./Dialogs/MyDialogs";
import {MessageItems} from "./MessageItems/MessageItems";
import {ActionType, MessagePageType} from "../../Redux/State";

type MessagePropsType = {
    messageState: MessagePageType
    dispatch: (action: ActionType) => void
}

export function Message(props: MessagePropsType) {
    return (
        <div>
            <div className={s.message}>
                <MessageItems messageState={props.messageState.message}
                              newMessageText={props.messageState.newMessageText}
                              dispatch={props.dispatch}/>
                <MyDialogs dialogsState={props.messageState.dialogs}/>
            </div>
        </div>
    )
}


