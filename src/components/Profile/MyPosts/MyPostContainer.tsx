import React from "react";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/Redux-store";
import {Dispatch} from "redux";
import {addPostAC, changeNewTextAC, ProfilePageType, TsarType} from "../../../Redux/Profile-reduser";



    type MapStateToPropsType = {
        addPost: () => void
        updateNewPostText:(text:string)=> void
    }

    const MapStateToProps = (state:AppStateType):ProfilePageType => {
        return {
            posts: state.profilePage.posts,
            messageForNewPost: state.profilePage.messageForNewPost,
            profile:state.profilePage.profile,
            userStatus:state.profilePage.userStatus
        }
    }
    const mapDispatchToProps = (dispatch: Dispatch<TsarType>):MapStateToPropsType => {
        return {
            addPost: () => dispatch(addPostAC()),
            updateNewPostText : (newText: string) => dispatch(changeNewTextAC(newText))

        }
    }

    export const MyPostContainer = connect(MapStateToProps,mapDispatchToProps) (MyPosts)


