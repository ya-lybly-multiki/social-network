import React from "react";
import s from "./Users.module.css"
import User from "./User/User";
import styles from "./User/User.module.css"



type PropsType = {
    users: Array<UserType>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
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
        <div className={s.usersPage}>
            <div className={s.numberPages}>
                {pages.map((page,index) => <div
                    key={index}
                    className={props.currentPage === page ? `${s.numbersPage} ${s.selected}` : s.numbersPage}
                onClick={()=>{props.setCurrentPage(page)}}>{page}</div>)}
            </div>


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