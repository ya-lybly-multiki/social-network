import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../Redux/Profile-reduser";

type PropsType = {
    profile:ProfileType | null
    userStatus:string
    updateUserStatus:(userStatus:string) => void
}


function Profile(props:PropsType) {

    return (
        <div>
            <ProfileInfo userStatus={props.userStatus}
                         updateUserStatus={props.updateUserStatus}
                         profile={props.profile}/>
            <MyPostContainer  />
        </div>

    )
}

export default Profile;