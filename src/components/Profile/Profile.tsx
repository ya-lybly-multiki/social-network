import React from "react";


import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../Redux/Store";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";

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
            <MyPostsContainer  posts={props.state.posts}
                     message ={props.state.messageForNewPost}
                     dispatch = {props.dispatch}
            />
        </div>

    )
}

export default Profile;