import React from "react";
import PreloaderImg from "../../../Assets/Images/preloader.gif";
import s from "./Preloader.module.css"


export function Preloader() {
    return (
        <div className={s.mainBlock}>
            <img className={s.preloader} src={PreloaderImg}/>
        </div>
    )
}