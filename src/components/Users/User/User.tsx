import React from "react";
import styles from "./User.module.css"
import UserPhoto from "../../../assets/images/TG_Box_Set_Cover.jpg"
import {NavLink} from "react-router-dom";
import {Button} from "../../utils/Button/Button";
import {UserType} from "../Users";


type PropsType = {

    unFollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: Array<number>
    user:UserType
}


function User(props: PropsType) {


    const btnClass = props.user.followed ? styles.btnUnFollow : styles.btnFollow
    const defaultPhoto = props.user.photos.small !== null ?props.user.photos.small : UserPhoto
   // const disabledBtn = props.followingInProgress.some(id => id === props.id)

    return (

        <div className={styles.userProfile}>
            <div className={styles.userBlock}>
                <h4>{props.user.name}</h4>
                <NavLink to={'/Profile/' + props.user.id}>
                    <img className={styles.userAvatar} src={defaultPhoto}/>
                </NavLink>
                {props.user.followed
                    ? <Button
                        disabled={ props.followingInProgress.some(id => id === props.user.id)}
                        className={btnClass} callBack={() => {props.unFollow(props.user.id)}} >
                        {"UNFOLLOW"}</Button>
                    : <Button
                        disabled={ props.followingInProgress.some(id => id === props.user.id)} className={btnClass}
                        callBack={() => {props.follow(props.user.id)}}>
                        {"FOLLOW"}</Button>
                }
            </div>

            <div className={styles.infoUser}>
                <span>my status: <span>{props.user.status}</span></span>
            </div>
        </div>
    )
}

export default User