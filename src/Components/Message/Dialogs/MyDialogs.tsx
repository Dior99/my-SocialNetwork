import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './MyDialogs.module.css';
import {DialogType} from "../../../Redux/State";

type MyDialogsPropsType = {
    dialogsState: Array<DialogType>
}

export function MyDialogs(props: MyDialogsPropsType) {

    const dialogsItems = props.dialogsState.map(i => {
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


