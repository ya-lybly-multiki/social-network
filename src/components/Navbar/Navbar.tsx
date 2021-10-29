import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
;



function Navbar() {

    // let sideBarElemnt = props.state.friends.map((s) =>
    //     <Sidebar name={s.name} id={s.id} avatar={s.avatar}/>)

    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <NavLink to='/Profile' activeClassName={classes.active}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/Dialogs' activeClassName={classes.active}>Messages</NavLink>
                </li>
                <li className={`${classes.item} ${classes.active}`}>
                    <NavLink to='/News'>News</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/Music'>Music</NavLink>
                </li>

                <li className={classes.item}>
                    <NavLink to='/Settings'>Settings</NavLink>
                    <li/>
                    <li className={classes.item}>
                        <NavLink to='/Friends'>Friends</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/Sidebar'>
                            <ul className={classes.slidebar__wrapper}>

                            </ul>
                        </NavLink>
                    </li>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar