import React, {ChangeEvent} from "react";
import classes from "./ProfileInfo.module.css";
import {ProfileType} from "../../../Redux/Profile-reduser";
import {ProfileStatusWithHooks} from "../ProfileStatus/ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/TG_Box_Set_Cover.jpg'
import Preloader from "../../utils/preloader/Preloader";




type PropsType = {
    profile: ProfileType | null
    userStatus: string
    updateUserStatus:(userStatus:string) => void
    isOwner:boolean
    savePhoto:(file:File)=> void
}

function ProfileInfo({profile,userStatus,updateUserStatus,isOwner,savePhoto}:PropsType) {

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
           savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={classes.photoBackGround}></div>
            <div className={classes.description}>
                <img className={classes.mainPhoto} src={profile?.photos.large || userPhoto}/>
                {isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
                <p>{profile?.fullName}</p>
               <ProfileStatusWithHooks updateUserStatus={updateUserStatus} userStatus={userStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;