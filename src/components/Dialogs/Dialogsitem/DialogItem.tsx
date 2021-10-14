import React from "react";
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    avatar:string
    name:string
}


function DialogItem(props: PropsType) {
    return (
        <li className={classes.dialog__item + ' ' + classes.active}>
            <NavLink to={'/dialog/' + props.id}>
                <img src={props.avatar}/>
                {props.name}</NavLink>
        </li>

    )
}

export default DialogItem;