import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";




function Profile() {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer  />
        </div>

    )
}

export default Profile;