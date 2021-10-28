import React from "react";
import {ActionTypes, MessagesPageType} from "../../Redux/Store";
import {sendMessageCreator, updateNewMessageBodyPostCreator} from "../../Redux/Dialogs-reduser";
import Dialogs from "./Dialogs";

type PropsType = {
    state: MessagesPageType
    dispatch : (action: ActionTypes) => void
}


function DialogsContainer(props: PropsType) {


    const onNewMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    const onSendMessageGhange = (body:string) => {
       props.dispatch(updateNewMessageBodyPostCreator(body))
    }

    return (<Dialogs dialogs={props.state.dialogs}
                 messages={props.state.messages}
                 newMessageBody={props.state.newMessageBody}
                 onNewMessageClick={onNewMessageClick}
                 onSendMessageGhange={onSendMessageGhange}/>
    )
}

export default DialogsContainer;