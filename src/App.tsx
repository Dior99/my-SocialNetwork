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
    state: StateType
    addPost: () => void
    addMessage: () => void
    updatePostText: (newText: string) => void
    updateMessageText: (newText: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <div className="appContent">
                    <Header/>
                    <Navbar/>
                    <div className="appMenuContent">
                        <Route path='/profile' render={() => <Profile stateProfile={props.state.profilePage}
                                                                      updatePostText={props.updatePostText}
                                                                      addPost={props.addPost}/>}/>
                        <Route path='/message' render={() => <Message stateMessage={props.state.messagePage}
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


