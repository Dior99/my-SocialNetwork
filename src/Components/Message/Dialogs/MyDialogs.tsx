import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './MyDialogs.module.css';

const DialogAvatar = "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"

type DialogStateType = {
    id: number
    name: string
    avatar: typeof DialogAvatar
}

export function MyDialogs() {
    const dialogsState: DialogStateType[] = [
        {id: 1, name: 'Kolya', avatar: DialogAvatar},
        {id: 2, name: 'Kristina', avatar: DialogAvatar},
        {id: 3, name: 'Misha', avatar: DialogAvatar},
        {id: 4, name: 'Alisa', avatar: DialogAvatar},
        {id: 5, name: 'Eva', avatar: DialogAvatar},
    ]

    const dialogsItems = dialogsState.map(i => {
        return (
            <NavLink to={'/message/' + i.name}
                     key={i.id}
                     activeClassName={s.active}
                     className={s.dialogsItem}>
                <img className={s.dialogsImg}
                     src={i.avatar}/>
                <div className={s.dialogsName}>
                    <span>{i.name}</span>
                </div>
            </NavLink>
        )
    })

    return (
        <div className={s.dialogs}>
            <h3>My dialogs</h3>
            { dialogsItems }
        </div>
    )
}


