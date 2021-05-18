import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, StateType} from "./Redux/State";

export const rerenderUI = (state: StateType) => {
    ReactDOM.render(<App state={state} addPost={addPost} addMessage={addMessage}/>,
        document.getElementById('root'));
}