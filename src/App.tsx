import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import { Message } from './Components/Message/Message';

function App() {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <div className="appContent">
                    <Header/>
                    <Navbar/>
                    <div className="appMenuContent">
                        <Route path='/profile' render={() => <Profile/>}/>
                        <Route path='/message' render={() => <Message/>}/>
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


