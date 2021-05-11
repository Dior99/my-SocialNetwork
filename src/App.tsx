import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Content} from "./Components/Content/Content";


function App() {
    return (
        <div className="appWrapper">
            <div className="appContent">
                <Header/>
                <Navbar/>
                <Content/>
            </div>
        </div>
    );
}

export default App;
