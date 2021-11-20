import React from "react";
import s from "./Users.module.css"
import User from "./User/User";
import styles from "./User/User.module.css"



type PropsType = {
    users: Array<UserType>
    toggle: (userId: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
    setCurrentPage:(num: number)=>void
    followingInProgress:Array<number>
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


     let pagesCount = (props.totalUserCount / props.pageSize)
     <= 20 ? Math.ceil(props.totalUserCount / props.pageSize) : 21

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.usersPage}>
            <div className={s.numberPages}>
                {pages.map(num => <span key={num}
                                      className={props.currentPage === num
                                          ? `${s.numbersPage} ${s.selected}`: s.numbersPage}
                onClick={()=>{props.setCurrentPage(num)}}
                >{num}</span>)}
            </div>


            {props.users.map(item => {
                return (
                    <User key={item.id}
                          id={item.id}
                          followed={item.followed}
                          fullName={item.name}
                          status={item.status}
                          toggle={props.toggle}
                          photos={item.photos}
                          uniqueUrlName={item.uniqueUrlName}
                          followingInProgress={props.followingInProgress}
                    />)
            })}
        </div>
    )
}


export default Users;