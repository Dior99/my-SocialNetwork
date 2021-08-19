import React, {ChangeEvent} from 'react';
import s from './Profile.module.css';
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileType} from "../../Redux/profile-reducer";
import {Preloader} from "../Common/Preloader/Preloader";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import Avatar from "../../Assets/Images/spaceman.jpg"

type ProfilePropsType = {
    profile: ProfileType | null
    updateStatus: (status: string) => void
    savePhoto: (photo: File) => void
    isOwner: boolean
    status: string
}

export function Profile(props: ProfilePropsType) {

    const savePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.content}>
            <div className={s.contentPhoto}>
                <img className={s.contentImg} src={props.profile.photos?.small || Avatar}/>
                {props.isOwner && <div className={s.changeAvatar_container}>
                    <input type="file" id="input_file"
                           className={s.input_file}
                           onChange={savePhotoHandler}/>
                    <label htmlFor="input_file" className={s.changeAvatar}>Edit</label>
                </div> }
            </div>

            <div className={s.contentInfo}>
                <ProfileInfo fullName={props.profile.fullName}
                             status={props.status}
                             updateStatus={props.updateStatus}/>
            </div>
            <MyPostContainer/>
        </div>
    )
}




