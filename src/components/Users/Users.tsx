import React from "react";
import {UserType} from "../../Redux/Users-reducer";
import User from "./User";
import styles from "./User.module.css"


type PropsType = {
    users: Array<UserType>
    toggle: (userId: number) => void
    setUser: (users: UserType) => void
}

function Users(props: PropsType) {



    return (
        <div className={styles.usersPage}>

                {props.users.map(item => {

                    return (
                        <User key={item.id}
                              id={item.id}
                              followed={item.followed}
                              fullName={item.fullName}
                              status={item.status}
                              location={item.location}
                              toggle={props.toggle}
                              avatar={item.avatar}

                        />)
                })}
            </div>
    )
}


export default Users;