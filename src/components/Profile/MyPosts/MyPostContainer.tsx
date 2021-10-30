import React from "react";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/Redux-store";
import {Dispatch} from "redux";
import {ActionTypes} from "../../../Redux/Store";
import {addPostAC, changeNewTextAC, ProfilePageType} from "../../../Redux/Profile-reduser";



    type MapStateToPropsType = {
        addPost: () => void
        updateNewPostText:(text:string)=> void
    }

    const MapStateToProps = (state:AppStateType):ProfilePageType => {
        return {
            posts: state.profilePage.posts,
            messageForNewPost: state.profilePage.messageForNewPost
        }
    }
    const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>):MapStateToPropsType => {
        return {
            addPost: () => dispatch(addPostAC()),
            updateNewPostText : (newText: string) => dispatch(changeNewTextAC(newText))

        }
    }

    export const MyPostContainer = connect(MapStateToProps,mapDispatchToProps) (MyPosts)


