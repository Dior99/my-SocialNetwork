import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    title: string
    likes: number
    avatar: string
}

export function Post(props: PostPropsType) {
    return (
        <div className={s.post}>
            <img className={s.postImg} src={props.avatar}/>
            <span>{props.title}</span>
            <div>likes{ props.likes}</div>
        </div>
    )
}


