import React from 'react';
import s from './Message.module.css';
import {MyDialogContainer} from "./Dialogs/MyDialogsContainer";
import MessageItemsContainer from "./MessageItems/MessageItemsContainer";

export function Message() {

    return (
        <div>
            <div className={s.message}>
                <MessageItemsContainer/>
                <MyDialogContainer/>
            </div>
        </div>
    )
}


