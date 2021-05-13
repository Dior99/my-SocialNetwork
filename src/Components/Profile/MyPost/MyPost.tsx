import React from 'react';
import s from './MyPost.module.css';
import {Post} from "./Post/Post";

const AvatarPost = "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"

export type PostType = {
    id: number
    title: string
    likes: number
    avatar: typeof AvatarPost
}


export function MyPost() {
    const post: PostType[] = [
        {id: 1, title: 'Post 1', likes: 5, avatar: AvatarPost},
        {id: 2, title: 'Post 2', likes: 15, avatar: AvatarPost},
        {id: 3, title: 'Post 3', likes: 25, avatar: AvatarPost},
    ]

    const postItems = post.map(el => {
        return (
            <Post key={el.id}
                  title={el.title}
                  likes={el.likes}
                  avatar={el.avatar}/>
        )
    })

    return (
        <div className={s.contentMyPost}>
            <div>My Post</div>
            <div>
                New Post
                <div>
                    <textarea/>
                </div>
                <button>Post</button>
            </div>
            { postItems }
        </div>
    )
}


