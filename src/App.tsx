import React from 'react';
import s from './App.module.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Message} from './Components/Message/Message';
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";

function App() {
    return (
        <div className={s.appWrapper}>
            <HeaderContainer/>
            <Navbar/>
            <div className={s.appMenuContent}>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/message' render={() => <Message/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;


