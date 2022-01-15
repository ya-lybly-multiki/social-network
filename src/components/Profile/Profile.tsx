import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../Redux/Profile-reduser";

type PropsType = {
    profile:ProfileType | null
    userStatus:string
    updateUserStatus:(userStatus:string) => void
    isOwner:boolean
    savePhoto:(file:File)=> void
}


function Profile(props:PropsType) {

    return (
        <div>
            <ProfileInfo
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                userStatus={props.userStatus}
                         updateUserStatus={props.updateUserStatus}
                         profile={props.profile}/>
            <MyPostContainer />
        </div>

    )
}

export default Profile;