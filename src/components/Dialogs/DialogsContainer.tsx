import React from "react";
import {
    FinalType,
    sendMessageCreator,
    updateNewMessageBodyPostCreator
} from "../../Redux/Dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {Dispatch} from "redux";


    type MapStateToPropsType = {
        onNewMessageClick:()=> void
        onSendMessageGhange:  (body: string) =>void
    }

    const MapStateToProps = (state:AppStateType) => {
        return {
            dialogs: state.messagesPage.dialogs,
            messages: state.messagesPage.messages,
            newMessageBody:state.messagesPage.newMessageBody,
            isAuth:state.auth.isAuth
        }
    }

    const mapDispatchToProps = (dispatch: Dispatch<FinalType>):MapStateToPropsType => {
        return {
            onNewMessageClick: () => dispatch(sendMessageCreator()),
             onSendMessageGhange:  (body: string) => dispatch(updateNewMessageBodyPostCreator(body))
        }
    }

    const DialogContainer = connect(MapStateToProps, mapDispatchToProps) (Dialogs)


export default DialogContainer;