import React from "react";
import classes from './Sidebar.module.css'
import {NavLink} from "react-router-dom";


type PropsType = {
    name: string,
    id: number,
    avatar: string | undefined
}

function Sidebar (props:PropsType) {
    return (
        <li className={classes.dialog__item }>
            <NavLink to={'/dialog/' + props.id}>
                <img src={props.avatar}/>
                <p>{props.name}</p>

            </NavLink>
        </li>
    )
}

export default Sidebar