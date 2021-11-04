import React from "react";
import {UserType} from "../../Redux/Users-reducer";
import User from "./User";
import styles from "./User.module.css"
import axios from "axios";


type PropsType = {
    users: Array<UserType>
    toggle: (userId: number) => void
    setUser: (users: Array<UserType>) => void
}

function Users(props: PropsType) {

    if (props.users.length === 0) {
    axios.get(" https://social-network.samuraijs.com/docs/users").then(response => {
        props.setUser([
            {
                id: 1,
                followed: false,
                fullName: "Artem",
                status: "Clown",
                avatar:"https://steamavatar.io/img/14777429717elSu.jpg",
                location: {
                    city: "Belgorod",
                    country: "Russia"
                }
            },
            {
                id: 2,
                followed: true,
                fullName: "Sofiya",
                status: "Best of the best",
                avatar:"https://steamuserimages-a.akamaihd.net/ugc/933814008881052346/EEE5323E6BE686EDC57F8EDFBCC71E6E5117FFE2/",
                location: {
                    city: "Belgorod",
                    country: "Russia"
                }
            }
        ])
    })

    }


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