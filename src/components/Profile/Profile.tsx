import React from "react";


import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../../Redux/State";
import MyPosts from "./MyPosts/MyPosts";

type PropsType = {
    state: ProfilePageType
    addPost:(PostType: string) => void
    changeNewText: (newText: string) => void

}

function Profile(props:PropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     message ={props.state.messageForNewPost}
                     addPost={props.addPost}
                     changeNewTextCallback={props.changeNewText}
            />
        </div>

    )
}

export default Profile;