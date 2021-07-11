import React from 'react';
import s from './Profile.module.css';
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileType} from "../../Redux/profile-reducer";
import {Preloader} from "../Common/Preloader/Preloader";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profile: ProfileType | null
    updateStatus: (status: string) => void
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
                <ProfileInfo fullName={props.profile.fullName}
                             aboutMe={props.profile.aboutMe}
                             updateStatus={props.updateStatus}/>
            </div>
            <MyPostContainer/>
        </div>
    )
}




