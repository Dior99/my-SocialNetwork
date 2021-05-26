import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MessageItems.module.css';
import {MessagePropsType} from "./MessageItemsContainer";

export function MessageItems(props: MessagePropsType) {

    const messageItems = props.messages.map(m => {
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

    let messageElement = React.createRef<HTMLInputElement>()

    const addMessage = () => props.addMessage()

    const onKeyClickEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            props.addMessage()
        }
    }

    const changeInputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateMessageText(e.currentTarget.value)
    }

    return (
        <div className={s.messageHeader}>
            {messageItems}
            <div>
                <div>
                    <input ref={messageElement}
                           onChange={changeInputTextHandler}
                           value={props.newMessageText}
                           onKeyPress={onKeyClickEnter}/>
                </div>
                <div>
                    <button onClick={addMessage} >Add</button>
                </div>
            </div>
        </div>
    )
}

