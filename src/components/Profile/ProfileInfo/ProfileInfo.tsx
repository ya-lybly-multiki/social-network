import React from "react";
import classes from "./ProfileInfo.module.css";

function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIdnf8ymLyVAK_C_5khkpGAfhprJNT4Dy1g&usqp=CAU'/>
            </div>
            <div className={classes.description}>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo;