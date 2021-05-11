import React from 'react';
import s from './Header.module.css';

export function Header() {
    return (
        <header className={s.header}>
            <div>
                <img className={s.img}
                     src="https://w7.pngwing.com/pngs/150/508/png-transparent-world-globe-website-logo-miscellaneous-symmetry-cartoon-thumbnail.png"/>
            </div>
        </header>
    )
}


