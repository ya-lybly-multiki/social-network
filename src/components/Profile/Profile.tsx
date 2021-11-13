import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../Redux/Profile-reduser";

type PropsType = {
    profile:ProfileType | null
}


function Profile(props:PropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer  />
        </div>

    )
}

export default Profile;