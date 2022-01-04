import React from "react";
import s from "./Users.module.css"
import User from "./User/User";
import styles from "./User/User.module.css"
import {Paginator} from "./Paginator";


type PropsType = {
    users: Array<UserType>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
    setCurrentPage: (num: number) => void
    followingInProgress: Array<number>
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
    totalUsersCount: number
    items: Array<UserType>
}

function Users(props: PropsType) {


    return (
        <div>
            <Paginator currentPage={props.currentPage}
                       setCurrentPage={props.setCurrentPage}
                       totalUserCount={props.totalUserCount}
                       pageSize={props.pageSize}
            />
            {props.users.map(item => {
                return (
                    <User
                        user={item}
                        key={item.id}
                        follow={props.follow}
                        unFollow={props.unFollow}
                        followingInProgress={props.followingInProgress}
                    />)
            })}
        </div>
    )
}


export default Users;