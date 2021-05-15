import React from 'react';
import s from './MessageItems.module.css';
import {MessageType} from "../../../Redux/State";


type MessageItemsPropsType = {
    messageState: Array<MessageType>
}

export function MessageItems(props: MessageItemsPropsType) {

    const messageItems = props.messageState.map(m => {
        return (
            <div key={m.id} className={s.messageItems}>
                <img className={s.messageAvatar} src={m.avatar}/>
                <div className={s.messageText}>
                    <div><h4 className={s.messageName}>{m.name}</h4></div>
                    <div>{m.title}</div>
                </div>
            </div>
        )
    })

    return (
        <div className={s.messageHeader}>
            { messageItems }
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
}

