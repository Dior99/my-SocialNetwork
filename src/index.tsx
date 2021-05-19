import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./Redux/State";
import reportWebVitals from "./reportWebVitals";

const rerenderUI = () => {
    ReactDOM.render(<App store={store.getState()}
                         removePost={store.removePost.bind(store)}
                         likesPostCount={store.likesPostCount.bind(store)}
                         addPost={store.addPost.bind(store)}
                         updatePostText={store.updatePostText.bind(store)}
                         updateMessageText={store.updateMessageText.bind(store)}
                         addMessage={store.addMessage.bind(store)}/>,
        document.getElementById('root'));
}

rerenderUI();

store.subscribe(rerenderUI)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
