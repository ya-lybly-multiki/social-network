import React from "react";
import styles from "./User.module.css"

type PropsType = {
    id: number
    followed: boolean
    fullName: string
    status: string | null
    toggle: (id: number) => void
    photos: undefined | string
    uniqueUrlName: null | string
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
                <img className={styles.userAvatar} src={props.photos}/>
                <button className={btnClass} onClick={toggleHandler}>{props.followed ? 'unfollow' : 'follow'}</button>
            </div>

            <div className={styles.infoUser}>
                <span>my status: <span>{props.status}</span></span>
            </div>
        </div>
    )
}

export default User