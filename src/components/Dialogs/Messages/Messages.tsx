import React from "react";
import classes from "./Messages.module.css";

type PropsType = {
    message:string
    id:string
}

function Messages (props:PropsType) {
    return (
        <li className={classes.message__item}>{props.message}</li>
    )
}

export default Messages;