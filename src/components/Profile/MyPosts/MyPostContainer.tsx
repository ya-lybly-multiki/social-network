import React from "react";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/Redux-store";
import {Dispatch} from "redux";
import {addPostAC,  ProfilePageType, TsarType} from "../../../Redux/Profile-reduser";



    type MapStateToPropsType = {
        addPost: (newPost:string) => void
    }

    const MapStateToProps = (state:AppStateType):ProfilePageType => {
        return {
            posts: state.profilePage.posts,
            profile:state.profilePage.profile,
            userStatus:state.profilePage.userStatus
        }
    }
    const mapDispatchToProps = (dispatch: Dispatch<TsarType>):MapStateToPropsType => {
        return {
            addPost: (newPost:string) => dispatch(addPostAC(newPost))
        }
    }

    export const MyPostContainer = connect(MapStateToProps,mapDispatchToProps) (MyPosts)


