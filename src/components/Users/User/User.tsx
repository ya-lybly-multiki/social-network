import React from "react";
import styles from "./User.module.css"
import UserPhoto from "../../../assets/images/TG_Box_Set_Cover.jpg"
import {NavLink} from "react-router-dom";
import {Button} from "../../utils/Button/Button";
import {usersAPI} from "../../../Api/ApiJs";

type PropsType = {
    id: number
    followed: boolean
    fullName: string
    status: string | null
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    photos: {
        small: undefined | string
        large: null | string
    }
    uniqueUrlName: null | string
    followingInProgress: Array<number>
}


function User(props: PropsType) {


    const btnClass = props.followed ? styles.btnUnFollow : styles.btnFollow
    const defaultPhoto = props.photos.small !== null ? props.photos.small : UserPhoto
   // const disabledBtn = props.followingInProgress.some(id => id === props.id)

    return (

        <div className={styles.userProfile}>
            <div className={styles.userBlock}>
                <h4>{props.fullName}</h4>
                <NavLink to={'/Profile/' + props.id}>
                    <img className={styles.userAvatar} src={defaultPhoto}/>
                </NavLink>
                {props.followed
                    ? <Button
                        disabled={ props.followingInProgress.some(id => id === props.id)}
                        className={btnClass} callBack={() => {props.unFollow(props.id)}} >
                        {"UNFOLLOW"}</Button>
                    : <Button
                        disabled={ props.followingInProgress.some(id => id === props.id)} className={btnClass}
                        callBack={() => {props.follow(props.id)}}>
                        {"FOLLOW"}</Button>
                }
            </div>

            <div className={styles.infoUser}>
                <span>my status: <span>{props.status}</span></span>
            </div>
        </div>
    )
}

export default User