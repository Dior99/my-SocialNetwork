import React from 'react';
import s from './Profile.module.css';
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileType} from "../../Redux/profile-reducer";
import {Preloader} from "../Common/Preloader/Preloader";

type ProfilePropsType = {
    profile: ProfileType | null
}

export function Profile(props: ProfilePropsType) {
    if (!props.profile?.photos) {
        return <Preloader/>
    }

    return (
        <div className={s.content}>
            <div className={s.contentPhoto}>
                <img className={s.contentImg} src={props.profile.photos.large}/>
            </div>
            <div className={s.contentInfo}>
                <h3>{props.profile.fullName}</h3>
                <div>{props.profile.aboutMe}</div>
            </div>
            <MyPostContainer/>
        </div>
    )
}


