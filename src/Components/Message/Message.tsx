import React from 'react';
import s from './Message.module.css';
import {MyDialogs} from "./Dialogs/MyDialogs";
import {MessageItems} from "./MessageItems/MessageItems";
import {MessagePageType} from "../../Redux/State";

type MessagePropsType = {
    stateMessage: MessagePageType
}

export function Message(props: MessagePropsType) {
    return (
        <div>
            <div className={s.message}>
                <MessageItems messageState={props.stateMessage.message}/>
                <MyDialogs dialogsState={props.stateMessage.dialogs}/>
            </div>
        </div>
    )
}


