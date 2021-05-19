import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    title: string
    id: number
    likes: number
    avatar: string
    removePost: (postID: number) => void
    likesPostCount: (postID: number) => void
}

export function Post(props: PostPropsType) {

    const removeClickHandler = () => props.removePost(props.id)
    const likesCount = () => props.likesPostCount(props.id)

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


