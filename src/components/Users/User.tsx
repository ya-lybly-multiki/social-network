import React from "react";
import styles from "./User.module.css"

type PropsType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
    toggle: (id: number) => void
    avatar: string

}


function User(props: PropsType) {

    const toggleHandler = () => {
        props.toggle(props.id)
    }

    const btnClass = props.followed ? styles.btnUnFollow : styles.btnFollow

    return (
        <div className={styles.userProfile}>
            <div className={styles.userBlock}>
                <h4>{props.fullName}</h4>
                <img className={styles.userAvatar} src={props.avatar}/>
                <button className={btnClass} onClick={toggleHandler}>{props.followed ? 'unfollow' : 'follow'}</button>
            </div>

            <div className={styles.infoUser}>
                <span>my status: <span>{props.status}</span></span>
                <span>I`m from <b>{props.location.country}</b> from <b>{props.location.city}</b></span>
            </div>
        </div>
    )
}

export default User