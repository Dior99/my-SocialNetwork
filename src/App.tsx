import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Message} from "./Components/Message/Message";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {StateType} from "./Redux/State";

type AppPropsType = {
    store: StateType
    addPost: () => void
    addMessage: () => void
    updatePostText: (newText: string) => void
    updateMessageText: (newText: string) => void
    removePost: (postID: number) => void
    likesPostCount: (postID: number) => void
}

function App(props: AppPropsType) {

    const profileState = props.store.profilePage
    const messageState = props.store.messagePage

    return (
        <BrowserRouter>
            <div className="appWrapper">
                <div className="appContent">
                    <Header/>
                    <Navbar/>
                    <div className="appMenuContent">
                        <Route path='/profile' render={() => <Profile profileState={profileState}
                                                                      removePost={props.removePost}
                                                                      likesPostCount={props.likesPostCount}
                                                                      updatePostText={props.updatePostText}
                                                                      addPost={props.addPost}/>}/>
                        <Route path='/message' render={() => <Message messageState={messageState}
                                                                      updateMessageText={props.updateMessageText}
                                                                      addMessage={props.addMessage}/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


