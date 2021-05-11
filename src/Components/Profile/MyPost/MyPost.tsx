import React from 'react';
import s from './MyPost.module.css';
import {Post} from "./Post/Post";

type AvatarPost = "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"

export type PostType = {
    id: number
    title: string
    likes: number
    avatar: AvatarPost
}


export function MyPost() {
    const post: PostType[] = [
        {
            id: 1,
            title: 'Post 1',
            likes: 5,
            avatar: "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"
        },
        {
            id: 2,
            title: 'Post 2',
            likes: 15,
            avatar: "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"
        },
        {
            id: 3,
            title: 'Post 3',
            likes: 25,
            avatar: "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"
        },
    ]

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
            {
                post.map((el) => {
                    return (
                        <Post title={el.title}
                              likes={el.likes}
                              avatar={el.avatar}/>
                    )
                })
            }
        </div>
    )
}


