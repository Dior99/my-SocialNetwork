import React from 'react';
import s from './Content.module.css';
import {MyPost} from "./MyPost/MyPost";

export function Content() {
    return (
        <div className={s.content}>
            <div className={s.contentPhoto} >
                <img className={s.contentImg}
                     src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"/>
            </div>
            <div className={s.contentInfo}>
                <h3>My name</h3>
                <div>Birthday:</div>
                <div>Current city:</div>
                <div>Relationship:</div>
            </div>
            <MyPost/>
        </div>
    )
}


