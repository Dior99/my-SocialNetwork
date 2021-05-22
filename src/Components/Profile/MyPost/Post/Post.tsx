import React from 'react';
import s from './Post.module.css';
import { ActionType, likesCountAC, removePostAC } from "../../../../Redux/State";

type PostPropsType = {
    title: string
    id: string
    likes: number
    avatar: string
    dispatch: (action: ActionType) => void
}

export function Post(props: PostPropsType) {

    const removeClickHandler = () => props.dispatch(removePostAC(props.id))
    const likesCount = () => props.dispatch(likesCountAC(props.id))

    return (
        <div className={s.post}>
            <div className={s.postContent}>
                <img className={s.postImg} src={props.avatar}/>
                <div className={s.postText}>{props.title}</div>
            </div>

            <div className={s.block}>
                <button onClick={removeClickHandler} className={s.removePost}>x</button>
                <div className={s.likesPost}>
                    <button className={s.likesButton} onClick={likesCount}>Likes {props.likes}</button>
                </div>
            </div>
        </div>
    )
}


