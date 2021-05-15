import React from 'react';
import s from './MyPost.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/State";

type MyPostPropsType = {
    post: Array<PostType>
}

export function MyPost(props: MyPostPropsType) {

    const postItems = props.post.map(el => {
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


