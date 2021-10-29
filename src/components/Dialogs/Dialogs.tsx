import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./Dialogsitem/DialogItem";
import Messages from "./Messages/Messages";
import { DialogsType,  MessagesType} from "../../Redux/Store";


type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    onNewMessageClick:()=> void
    newMessageBody:string
    onSendMessageGhange:(body:string)=> void
}


function Dialogs(props: PropsType) {

    let dialogElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)
    let messageElements = props.messages.map((m) => <Messages message={m.message} id={m.id}/>)
    let newMessageBody = props.newMessageBody

    const onNewMessageClickHandler = () => props.onNewMessageClick()

    const onSendMessageGhangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
       props.onSendMessageGhange(body)
        console.log(body)
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
                      <textarea value={newMessageBody} onChange={onSendMessageGhangeHandler}/>
                        <div><button onClick ={onNewMessageClickHandler}>Send</button></div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Dialogs;