import React from 'react';
import s from './MyDialogs.module.css';

export function MyDialogs() {
    const items = [
        {id: 1, name: 'Kolya'},
        {id: 2, name: 'Kristina'},
        {id: 3, name: 'Misha'},
        {id: 4, name: 'Alisa'},
        {id: 5, name: 'Eva'},
    ]


    return (
        <div className={s.dialogs}>
            <h3>My dialogs</h3>
            {
                items.map(i => {
                    return (
                        <div className={s.dialogsItem}>
                            <img className={s.dialogsImg}
                                 src="https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"/>
                            <div className={s.dialogsName}>
                                <span>{i.name}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


