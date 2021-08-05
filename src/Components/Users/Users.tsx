import React from 'react';
import s from './Users.module.css';
import {UserType} from "../../Redux/users-reducer";
import {Paginator} from "../Common/Paginator/Paginator";
import {User} from "./User/User";

type UsersPropsType2 = {
    users: Array<UserType>
    totalUserCount: number
    pageSize: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageNumber: (pageNumber: number) => void
    followingInProgress: Array<number>
}

export function Users(props: UsersPropsType2) {

    return <div>
        <h3>Users</h3>
        <div className={s.userContainer}>
            {
                props.users.map(u => <User key={u.id}
                                           user={u}
                                           follow={props.follow}
                                           unfollow={props.unfollow}
                                           followingInProgress={props.followingInProgress}/>
                )
            }
        </div>
        <div className={s.paginationBlock}>
            <Paginator totalItemsCount={props.totalUserCount}
                       pageSize={props.pageSize}
                       onPageNumber={props.onPageNumber}
                       currentPage={props.currentPage}/>
        </div>
    </div>
}


