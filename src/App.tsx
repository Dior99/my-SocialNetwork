import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Message} from "./Components/Message/Message";


function App() {
    return (
        <div className="appWrapper">
            <div className="appContent">
                <Header/>
                <Navbar/>
                <div className="appMenuContent">
                    {/*<Profile/>*/}
                    <Message/>
                </div>
            </div>
        </div>
    );
}

export default App;


