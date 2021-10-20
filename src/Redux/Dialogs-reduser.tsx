import React from "react";
import {
    ActionTypes, DialogsType, MessagesPageType,
    PostType, ProfilePageType,
    RootStateType,
    sendMessageCreatorType,
    updateNewMessageBodyPostCreatorType
} from "./State";

type PropsType = {
    action: ActionTypes
    state: MessagesPageType

}


const DialogsReducer = (state:MessagesPageType, action:ActionTypes) => {
        switch (action.type) {
            case "SEND-MESSAGE":
                state.newMessageBody = action.body;
                return state;
            case "UPDATE-NEW-MESSAGE":
                let body = state.newMessageBody;
                state.newMessageBody = "";
                state.messages.push({id: 6, message : body})
                return state;
            default: return state
        }

}

export const sendMessageCreator = ():sendMessageCreatorType => {
    return {
        type:"UPDATE-NEW-MESSAGE"
    } as const
}

export const updateNewMessageBodyPostCreator = (body: string):updateNewMessageBodyPostCreatorType => {
    return {
        type: "SEND-MESSAGE",
        body: body
    } as const
}

export default DialogsReducer

