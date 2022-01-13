import React from "react";
import classes from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {NavigationType} from "../../Redux/Navbar-reducer";


function Navbar() {

    const navbar = useSelector<AppStateType,  Array<NavigationType> >
    ( (state) => state.navigation.navigation)

    const navLinkItems = navbar.map( n =>
        <NavLink key={n.id} to={n.link}>{n.pageName}</NavLink> )


    return (
        <nav className={classes.nav}>
            <div className={classes.nav__bottom}>
                {navLinkItems}
            </div>

        </nav>
    )
}

export default Navbar