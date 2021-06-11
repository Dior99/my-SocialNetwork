import React from 'react';
import s from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";
import {AvatarPost} from "../../Redux/users-reducer";

export function Users(props: UsersPropsType) {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                followed: false,
                name: 'Dima',
                status: "I am a BOSS",
                avatar: AvatarPost,
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: v1(),
                followed: true,
                name: 'Kristina',
                status: "Mother",
                avatar: AvatarPost,
                location: {country: 'Ukraine', city: 'Kiev'}
            },
            {
                id: v1(),
                followed: false,
                name: 'Dima',
                status: "I am a BOSS",
                avatar: AvatarPost,
                location: {country: 'Russia', city: 'Rostov-on-Don'}
            },
            {
                id: v1(),
                followed: false,
                name: 'Dima',
                status: "I am a BOSS",
                avatar: AvatarPost,
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: v1(),
                followed: false,
                name: 'Dima',
                status: "I am a BOSS",
                avatar: AvatarPost,
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: v1(),
                followed: false,
                name: 'Dima',
                status: "I am a BOSS",
                avatar: AvatarPost,
                location: {country: 'Russia', city: 'Moscow'}
            },
        ])
    }

    return (
        <>
            <h3>Users</h3>
            <div className={s.userContainer}>
                {
                    props.users.map(u => {
                            const butUnfollowHandler = () => props.unfollow(u.id)
                            const butFollowHandler = () => props.follow(u.id)
                            return (<div key={u.id}>
                                    <div className={s.userItem}>
                                        <div>
                                            <img className={s.imgUser} src={u.avatar}/>
                                        </div>
                                        <div className={s.userNameBut}>
                                            <div>{u.name}</div>
                                            <div>
                                                {
                                                    u.followed
                                                        ? <button className={s.butUsers} onClick={butUnfollowHandler}>Unfollow</button>
                                                        : <button className={s.butUsers} onClick={butFollowHandler}>Follow</button>
                                                }
                                            </div>
                                        </div>
                                        <div>{u.status}</div>
                                        <div className={s.locationBlock}>
                                            <span>{u.location.country}</span>
                                            <span>{u.location.city}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </>
    )
}


