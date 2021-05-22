import React from 'react';
import s from './Profile.module.css';
import {MyPost} from "./MyPost/MyPost";
import {ActionType, ProfilePageType} from "../../Redux/State";

type ProfilePropsType = {
    profileState: ProfilePageType
    dispatch: (action: ActionType) => void
}

export function Profile(props: ProfilePropsType) {
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
            <MyPost post={props.profileState.post}
                    newPostText={props.profileState.newPostText}
                    dispatch={props.dispatch}/>
        </div>
    )
}


