import React from "react";


import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../Redux/State";
import MyPosts from "./MyPosts/MyPosts";

type PropsType = {
    state: ProfilePageType
    addPost:(PostType: string) => void
    changeNewText: (newText: string) => void
    dispatch : (action: ActionTypes) => void

}

function Profile(props:PropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     message ={props.state.messageForNewPost}
                     dispatch = {props.dispatch}
                     addPost={props.addPost}
                     changeNewTextCallback={props.changeNewText}
            />
        </div>

    )
}

export default Profile;