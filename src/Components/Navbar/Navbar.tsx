import React from 'react';
import s from './Navbar.module.css';

export function Navbar() {
    return (
        <nav className={s.nav}>
            <ul className={s.menu}>
                <li><a href="#">My profile</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Messenger</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    )
}


