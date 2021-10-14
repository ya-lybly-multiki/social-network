import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./Dialogsitem/DialogItem";
import Messages from "./Messages/Messages";
import {MessagesPageType} from "../../Redux/State";

type PropsType = {
    state: MessagesPageType
}


function Dialogs(props: PropsType) {

    let dialogElements = props.state.dialogs.map((d) =>
        <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)
    let messageElements = props.state.messages.map((m) =>
        <Messages message={m.message} id={m.id}/>)
    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs__wrapper}>
                <ul className={classes.dialogs}>
                    {dialogElements}
                </ul>
            </div>
            <div className={classes.message__wrapper}>
                <ul className={classes.messages}>
                    {messageElements}
                </ul>
            </div>
        </div>
    )
}

export default Dialogs;