import React from 'react';
import s from './MessageItems.module.css';

const AvatarMessage = "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"

type MessageStateType = {
    id: number
    title: string
    name: string
    avatar: typeof AvatarMessage
}

export function MessageItems() {

    const messageState: MessageStateType[] = [
        {id: 1, title: "Hello", name: "Kristina", avatar: AvatarMessage},
        {id: 2, title: "How are your?", name: "Kristina", avatar: AvatarMessage},
        {id: 3, title: "Hello, I am fine", name: "Kolya", avatar: AvatarMessage},
    ]

    const messageItems = messageState.map(m => {
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

