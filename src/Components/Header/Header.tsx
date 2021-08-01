import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {HeaderPropsType} from "./HeaderContainer";

export function Header(props: HeaderPropsType) {
    return (
        <header className={s.header}>
            <div>
                <img className={s.img}
                     src="https://w7.pngwing.com/pngs/150/508/png-transparent-world-globe-website-logo-miscellaneous-symmetry-cartoon-thumbnail.png"/>
            </div>
            <div className={s.authContainer}>
                {props.isAuth
                    ? <span>{props.login} - <button onClick={props.logout}>Logout</button></span>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
}


