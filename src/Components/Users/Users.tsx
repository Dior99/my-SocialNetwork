import React from 'react';
import s from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../Assets/Images/spaceman.jpg'
import {PostType} from "../../Redux/profile-reducer";

export class Users extends React.Component<UsersPropsType, Array<PostType>>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render () {
       return <>
            <h3>Users</h3>
            <div className={s.userContainer}>
                {
                    this.props.users.map(u => {
                            const butUnfollowHandler = () => this.props.unfollow(u.id)
                            const butFollowHandler = () => this.props.follow(u.id)
                            return (<div key={u.id}>
                                    <div className={s.userItem}>
                                        <div>
                                            <img className={s.imgUser} src={u.photos.small != null ? u.photos.small : userPhoto}/>
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
        </>
    }
}


