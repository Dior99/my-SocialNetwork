import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

export function Navbar() {
    return (
        <nav className={s.nav}>
            <ul className={s.menu}>
                <li><NavLink activeClassName={s.active} to="/profile">My profile</NavLink></li>
                <li><NavLink activeClassName={s.active} to="/message">Message</NavLink></li>
                <li><NavLink activeClassName={s.active} to="/users">Users</NavLink></li>
                <li><NavLink activeClassName={s.active} to="/news">News</NavLink></li>
                <li><NavLink activeClassName={s.active} to="/music">Music</NavLink></li>
                <li><NavLink activeClassName={s.active} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    )
}


