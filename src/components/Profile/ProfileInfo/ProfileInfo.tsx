import React from "react";
import classes from "./ProfileInfo.module.css";
import {ProfileType} from "../../../Redux/Profile-reduser";
import ProfileStatus from "../ProfileStatus/ProfileStatus";



type PropsType = {
    profile: ProfileType | null
    userStatus: string
}

function ProfileInfo({profile,userStatus}:PropsType) {



    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIdnf8ymLyVAK_C_5khkpGAfhprJNT4Dy1g&usqp=CAU'/>
            </div>
            <div className={classes.description}>
                <img  src={profile?.photos.large}/>
                <p>{profile?.fullName}</p>
               <ProfileStatus userStatus={userStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;