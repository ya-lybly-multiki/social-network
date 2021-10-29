import React from "react";
import {sendMessageCreator, updateNewMessageBodyPostCreator} from "../../Redux/Dialogs-reduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


function DialogsContainer() {

    return (<StoreContext.Consumer>
            {
                (store) => {
                    const onNewMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }

                    const onSendMessageGhange = (body: string) => {
                        store.dispatch(updateNewMessageBodyPostCreator(body))
                    }

                    return <Dialogs dialogs={store.getState().messagesPage.dialogs}
                                    messages={store.getState().messagesPage.messages}
                                    newMessageBody={store.getState().messagesPage.newMessageBody}
                                    onNewMessageClick={onNewMessageClick}
                                    onSendMessageGhange={onSendMessageGhange}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;