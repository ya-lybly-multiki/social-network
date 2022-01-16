import React, { useState} from "react";
import classes from "./ProfileInfo.module.css";
import {ProfileType} from "../../../Redux/Profile-reduser";
import {ProfileStatusWithHooks} from "../ProfileStatus/ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/TG_Box_Set_Cover.jpg'
import {ProfileData} from "./ProfileData/ProfileData";
import {EditProfileForm} from "./EditProfileForm/EditProfileForm";


type PropsType = {
    profile: ProfileType | null
    userStatus: string
    updateUserStatus: (userStatus: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

function ProfileInfo({profile, userStatus, updateUserStatus, isOwner, savePhoto}: PropsType) {

    const [editMode, setEditMode] = useState(false)

    const editModeHandler = (value:boolean) => {
        setEditMode(value)
    }


    return (
        <div>

            <div className={classes.photoBackGround}></div>
            <div className={classes.description}>
                <img className={classes.mainPhoto} src={profile?.photos.large || userPhoto}/>
                {isOwner && !editMode &&
                <button  onClick={() => setEditMode(true)}>Edit profile</button>}
                {editMode ? <EditProfileForm profile={profile} setEditProfile={editModeHandler} savePhoto={savePhoto}/>
                    : <ProfileData profile={profile} />}

            </div>
            <ProfileStatusWithHooks updateUserStatus={updateUserStatus} userStatus={userStatus}/>
        </div>

    )
}

export default ProfileInfo;