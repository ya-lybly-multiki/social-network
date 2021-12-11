import React, {ChangeEvent, useState} from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./Dialogsitem/DialogItem";
import Messages from "./Messages/Messages";
import {DialogType, MessageType} from "../../Redux/Dialogs-reduser";
import TextAreaForm from "../utils/TextAreaForm/TextAreaForm";



type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    onNewMessageClick:(newMessage:string)=> void
    newMessageBody:string
    isAuth:boolean
}


function Dialogs(props: PropsType) {

    let dialogElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)
    let messageElements = props.messages.map((m) => <Messages message={m.message} id={m.id}/>)
    let newMessageBody = props.newMessageBody

    const onNewMessageClickHandler = (newMessage:string) => {
        props.onNewMessageClick(newMessage)
        setTitle("")

        }
    const [title,setTitle] = useState(newMessageBody)
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
                        <TextAreaForm addText={onNewMessageClickHandler}
                                      Text={title}
                                      nameBtn={"Send"}
                                      setTitle={setTitle}
                        />
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Dialogs;