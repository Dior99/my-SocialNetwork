import React from 'react';
import s from './ProfileInfo.module.css';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';

type ProfileInfoPropsType = {
    fullName: string
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <h3>{props.fullName}</h3>
            <ProfileStatus status={props.status}
                           updateStatus={props.updateStatus}/>
        </div>
    )
}


