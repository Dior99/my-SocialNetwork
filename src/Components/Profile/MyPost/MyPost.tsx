import React, {ChangeEvent} from 'react';
import s from './MyPost.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/State";

type MyPostPropsType = {
    post: Array<PostType>
    addPost: (title: string) => void
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

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if(newPostElement.current) {
            props.addPost(newPostElement.current.value);
            newPostElement.current.value = '';
        }
    }

    return (
        <div className={s.contentMyPost}>
            <div>My Post</div>
            <div>
                New Post
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <button onClick={addPost}>Post</button>
            </div>
            { postItems }
        </div>
    )
}


