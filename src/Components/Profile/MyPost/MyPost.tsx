import React, {ChangeEvent} from 'react';
import s from './MyPost.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/State";

type MyPostPropsType = {
    post: Array<PostType>
    newPostText: string
    addPost: () => void
    updatePostText: (newText: string) => void
    removePost: (postID: number) => void
    likesPostCount: (postID: number) => void
}

export function MyPost(props: MyPostPropsType) {

    const postItems = props.post.map(el => {
        return (
            <Post key={el.id}
                  id={el.id}
                  title={el.title}
                  likes={el.likes}
                  likesPostCount={props.likesPostCount}
                  removePost={props.removePost}
                  avatar={el.avatar}/>
        )
    })

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
            props.addPost();
    }

    const changeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostText(e.currentTarget.value)
    }

    return (
        <div className={s.contentMyPost}>
            <div>My Post</div>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={changeTextarea}
                              value={props.newPostText}/>
                </div>
                <button onClick={addPost}>Post</button>
            </div>
            { postItems }
        </div>
    )
}


