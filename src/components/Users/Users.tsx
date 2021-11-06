import React from "react";

import User from "./User";
import styles from "./User.module.css"
import axios from "axios";


type PropsType = {
    users: Array<UserType>
    toggle: (userId: number) => void
    setUser: (users: Array<UserType>) => void
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: undefined | string
        large: null | string
    }
    status: null | string
    followed: boolean
}

export type DataType = {
    error: null | string
    totalCount: number
    items: Array<UserType>
}

function Users(props: PropsType) {

    if (props.users.length === 0) {
    axios.get(" https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUser(response.data.items)
    })
    }


    return (
        <div className={styles.usersPage}>

                {props.users.map(item => {
                    return (
                        <User key={item.id}
                              id={item.id}
                              followed={item.followed}
                              fullName={item.name}
                              status={item.status}
                              toggle={props.toggle}
                              photos={item.photos.small}
                              uniqueUrlName={item.uniqueUrlName}
                        />)
                })}
            </div>
    )
}


export default Users;