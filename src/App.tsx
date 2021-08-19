import React, {ComponentType} from 'react';
import s from './App.module.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Message} from './Components/Message/Message';
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {setLoginUser} from "./Redux/auth-reducer";
import {AppStateType} from "./Redux/redux-store";
import {Preloader} from "./Components/Common/Preloader/Preloader";
import HeaderContainer from "./Components/Header/HeaderContainer";
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';

type MapStatePropsType = {
    initialized: boolean
}

type MapDispatchPropsType = {
    setLoginUser: () => void
}

type AppContainerPropsType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}

class App extends React.Component<AppContainerPropsType> {
    componentDidMount() {
        this.props.setLoginUser()
    }

    render() {
        return (
            <>
                {this.props.initialized && <Preloader/>}
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
            </>
        )
    };
}

export default compose<ComponentType>(withRouter, connect(mapStateToProps, {setLoginUser}))(App);


