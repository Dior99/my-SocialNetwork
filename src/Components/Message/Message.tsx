import React from 'react';
import s from './Message.module.css';
import { MessageItemsContainer } from './MessageItems/MessageItemsContainer';
import {MyDialogContainer} from "./Dialogs/MyDialogsContainer";

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


