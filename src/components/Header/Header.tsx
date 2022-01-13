import React from "react";
import classes from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";


type PropsType = {
    login: string | null
    isAuth:boolean
    logOut:()=> void
}

function Header({login,isAuth,logOut}:PropsType) {
    return (
        <header className={classes.header}>
            <div className={classes.headerWrapper}>
               <h1>Facebook Killer</h1>
                <div className={classes.headerLogin}>
                    {isAuth ?  <div>{login} <Button onClick={logOut}>Log out</Button></div>
                    : <NavLink to={"/login"}>
                            <Button style={{color:"aqua"}}  size={"large"}>
                                Login
                            </Button>
                            </NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header;