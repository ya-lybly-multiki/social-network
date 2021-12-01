import React from "react";
import {
    FinalType,
    sendMessageCreator,
    updateNewMessageBodyPostCreator
} from "../../Redux/Dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


type MapStateToPropsType = {
    onNewMessageClick: () => void
    onSendMessageGhange: (body: string) => void
}

const MapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageBody: state.messagesPage.newMessageBody,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<FinalType>): MapStateToPropsType => {
    return {
        onNewMessageClick: () => dispatch(sendMessageCreator()),
        onSendMessageGhange: (body: string) => dispatch(updateNewMessageBodyPostCreator(body))
    }
}


export default compose<React.ComponentType>(
    connect(MapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);