import React from "react";
import classes from "./ProfileInfo.module.css";
import {ProfileType} from "../../../Redux/Profile-reduser";
import {ProfileStatusWithHooks} from "../ProfileStatus/ProfileStatusWithHooks";




type PropsType = {
    profile: ProfileType | null
    userStatus: string
    updateUserStatus:(userStatus:string) => void
}

function ProfileInfo({profile,userStatus,updateUserStatus}:PropsType) {

    return (
        <div>
            <div className={classes.photoBackGround}></div>
            <div className={classes.description}>
                <img  src={profile?.photos.large}/>
                <p>{profile?.fullName}</p>
               <ProfileStatusWithHooks updateUserStatus={updateUserStatus} userStatus={userStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;