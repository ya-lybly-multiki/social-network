import React from "react";
import {
    FinalType,
    sendMessageCreator,

} from "../../Redux/Dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


type MapStateToPropsType = {
    onNewMessageClick: (newMessage:string) => void
}

const MapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<FinalType>): MapStateToPropsType => {
    return {
        onNewMessageClick: (newMessage:string) => dispatch(sendMessageCreator(newMessage))
    }
}


export default compose<React.ComponentType>(
    connect(MapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);