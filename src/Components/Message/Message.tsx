import React from 'react';
import s from './Message.module.css';
import {MyDialogs} from "./Dialogs/MyDialogs";

export function Message() {
    return (
        <div className={s.message}>
            <h3>Message</h3>
            <MyDialogs/>
        </div>
    )
}


