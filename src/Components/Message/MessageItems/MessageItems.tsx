import React, {KeyboardEvent} from 'react';
import s from './MessageItems.module.css';
import {MessageType} from "../../../Redux/State";


type MessageItemsPropsType = {
    messageState: Array<MessageType>
    addMessage: (title: string) => void
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

    let messageElement = React.createRef<HTMLInputElement>()

    const addMessage = () => {
        if (messageElement.current && messageElement.current.value.trim() !== "") {
            props.addMessage(messageElement.current.value);
            messageElement.current.value = '';
        }
    }

    const onKeyClickEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(messageElement.current && e.key === "Enter") {
            props.addMessage(messageElement.current.value)
            messageElement.current.value = '';
        }
    }

    return (
        <div className={s.messageHeader}>
            {messageItems}
            <div>
                <div>
                    <input ref={messageElement} onKeyPress={onKeyClickEnter}/>
                </div>
                <div>
                    <button onClick={addMessage} >Add</button>
                </div>
            </div>
        </div>
    )
}

