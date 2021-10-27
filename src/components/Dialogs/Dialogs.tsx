import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./Dialogsitem/DialogItem";
import Messages from "./Messages/Messages";
import {ActionTypes, MessagesPageType} from "../../Redux/Store";
import {sendMessageCreator, updateNewMessageBodyPostCreator} from "../../Redux/Dialogs-reduser";

type PropsType = {
    state: MessagesPageType
    dispatch : (action: ActionTypes) => void
}


function Dialogs(props: PropsType) {

    let dialogElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)
    let messageElements = props.state.messages.map((m) => <Messages message={m.message} id={m.id}/>)
    let newMessageBody = props.state.newMessageBody

    const onNewMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    const onSendMessageGhange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
       props.dispatch(updateNewMessageBodyPostCreator(body))
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs__wrapper}>
                <ul className={classes.dialogs}>
                    {dialogElements}
                </ul>
            </div>
            <div className={classes.message__wrapper}>
                <ul className={classes.messages}>
                    <div>
                        {messageElements}
                    </div>
                    <div>
                      <textarea value={newMessageBody} onChange={onSendMessageGhange}/>
                        <div><button onClick ={onNewMessageClick}>Send</button></div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Dialogs;