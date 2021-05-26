import React, {ChangeEvent} from 'react';
import s from './MyPost.module.css';
import {Post} from "./Post/Post";
import {MyPostPropsType} from "./MyPostContainer";

export function MyPost(props: MyPostPropsType) {

    const postItems = props.posts.map(el => {
        return (
            <Post key={el.id}
                  id={el.id}
                  title={el.title}
                  likes={el.likes}
                  avatar={el.avatar}
                  removePost={props.removePost}
                  likesCountPost={props.likesCountPost}/>
        )
    })

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
            props.addPost();
    }

    const changeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostText(e.currentTarget.value)
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


