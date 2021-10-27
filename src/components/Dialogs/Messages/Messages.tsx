import React from "react";
import classes from "./Messages.module.css";
import {MessagesPageType} from "../../../Redux/Store";

type PropsType = {
    message:string
    id:number
}

function Messages (props:PropsType) {
    return (
        <li className={classes.message__item}>{props.message}</li>
    )
}

export default Messages;