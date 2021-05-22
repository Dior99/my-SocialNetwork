import React, {ChangeEvent} from 'react';
import s from './MyPost.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/State";
import {addPostAC, updatePostTextAC} from "../../../Redux/profile-reducer";

type MyPostPropsType = {
    post: Array<PostType>
    newPostText: string
    dispatch: (action: any) => void
}

export function MyPost(props: MyPostPropsType) {

    const postItems = props.post.map(el => {
        return (
            <Post key={el.id}
                  id={el.id}
                  title={el.title}
                  likes={el.likes}
                  avatar={el.avatar}
                  dispatch={props.dispatch}/>
        )
    })

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
            props.dispatch(addPostAC());
    }

    const changeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updatePostTextAC(e.currentTarget.value))
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


