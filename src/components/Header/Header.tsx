import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


type PropsType = {
    login: string | null
    isAuth:boolean
}

function Header({login,isAuth}:PropsType) {
    return (
        <header className={classes.header}>
            <div className={classes.headerWrapper}>
                <img src='https://gohtml.ru/images/news/110--15-02-03--13-54-00.jpeg'/>
                <div className={classes.headerLogin}>
                    {isAuth ? login
                    : <NavLink to={"/login"}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header;