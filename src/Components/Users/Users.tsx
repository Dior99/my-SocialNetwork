import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../Assets/Images/spaceman.jpg'
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from 'react-router-dom';
import {userAPI} from "../../API/api";

type UsersPropsType2 = {
    users: Array<UserType>
    totalUserCount: number
    pageSize: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    onPageNumber: (pageNumber: number) => void
    setFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}

export function Users(props: UsersPropsType2) {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <h3>Users</h3>
        <div className={s.paginationBlock}>
            {
                pages.map(el => {
                    return (

                        <span key={el} onClick={() => props.onPageNumber(el)}
                              className={props.currentPage === el ? s.activeCurrentPage : ''}>{el}</span>


                    )
                })
            }
        </div>
        <div className={s.userContainer}>
            {
                props.users.map(u => {

                        const butUnfollowHandler = () => {
                            props.setFollowingInProgress(true, u.id)
                            userAPI.unfollow(u.id)
                                .then(data => {
                                    if(data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.setFollowingInProgress(false, u.id)
                                })
                        }
                        const butFollowHandler = () => {
                            props.setFollowingInProgress(true, u.id)
                            userAPI.follow(u.id)
                                .then(data => {
                                    if(data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.setFollowingInProgress(false, u.id)
                                })
                        }
                        return (<div key={u.id}>
                                <div className={s.userItem}>
                                    <div>
                                        <NavLink to={'/profile/' + u.id}>
                                            <img className={s.imgUser}
                                                 src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                        </NavLink>
                                    </div>
                                    <div className={s.userNameBut}>
                                        <div>{u.name}</div>
                                        <div>
                                            {
                                                u.followed
                                                    ? <button className={s.butUsers}
                                                              disabled={props.followingInProgress.some(id => id === u.id)}
                                                              onClick={butUnfollowHandler}>Unfollow</button>
                                                    : <button className={s.butUsers}
                                                              disabled={props.followingInProgress.some(id => id === u.id)}
                                                              onClick={butFollowHandler}>Follow</button>
                                            }
                                        </div>
                                    </div>
                                    <div className={s.statusUsers}>{u.status}</div>
                                    <div className={s.locationBlock}>
                                        <span>Russia</span>
                                        <span>Rostov</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    </div>
}


