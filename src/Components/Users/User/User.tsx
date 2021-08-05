import React from 'react';
import s from './User.module.css';
import {NavLink} from 'react-router-dom';
import {UserType} from "../../../Redux/users-reducer";
import UserPhoto from "../../../Assets/Images/spaceman.jpg";

type UserPropsType = {
    user: UserType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: Array<number>
}

export function User({user, follow, unfollow, followingInProgress}: UserPropsType) {

    const butUnfollowHandler = () => unfollow(user.id)
    const butFollowHandler = () => follow(user.id)

    return (
        <div>
            <div key={user.id}>
                <div className={s.userItem}>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={s.imgUser}
                                 src={user.photos.small != null ? user.photos.small : UserPhoto}/>
                        </NavLink>
                    </div>
                    <div className={s.userNameBut}>
                        <div>{user.name}</div>
                        <div>
                            {
                                user.followed
                                    ? <button className={s.butUsers}
                                              disabled={followingInProgress.some(id => id === id)}
                                              onClick={butUnfollowHandler}>Unfollow</button>
                                    : <button className={s.butUsers}
                                              disabled={followingInProgress.some(id => id === id)}
                                              onClick={butFollowHandler}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={s.statusUsers}>{user.status}</div>
                    <div className={s.locationBlock}>
                        <span>Russia</span>
                        <span>Rostov</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


