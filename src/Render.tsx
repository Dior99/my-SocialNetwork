import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, likesCount, removePost, StateType, updateMessageText, updatePostText} from "./Redux/State";

export const rerenderUI = (state: StateType) => {
    ReactDOM.render(<App state={state}
                         removePost={removePost}
                         likesCount={likesCount}
                         addPost={addPost}
                         updatePostText={updatePostText}
                         updateMessageText={updateMessageText}
                         addMessage={addMessage}/>,
        document.getElementById('root'));
}