import React from 'react';
import s from './Message.module.css';
import {MyDialogs} from "./Dialogs/MyDialogs";
import {MessageItems} from "./MessageItems/MessageItems";

export function Message() {
    return (
        <div>
            <div className={s.message}>
                <MessageItems/>
                <MyDialogs/>
            </div>
        </div>
    )
}


