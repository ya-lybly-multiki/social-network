import React from "react";
import {connect} from "react-redux";
import {UserType} from "./Users";
import {AppStateType} from "../../Redux/Redux-store";
import {Dispatch} from "redux";
import {
    GlobalACType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleAC,
    UsersType
} from "../../Redux/Users-reducer";
import {UsersAPI} from "./UsersClass";


export type MapStateToPropsType = {
    users: UsersType
    pageSize: number
    totalUserCount: number
    currentPage: number
}

export type MapDispatchToPropsType = {
    users: Array<UserType>
    toggle: (userId: number) => void
    setUser: (users: Array<UserType>) => void
    setCurrentPage:(num:number) =>void
    setTotalUsersCount:(usersCount:number)=>void
}

export type UsersComponentType = MapStateToPropsType | MapDispatchToPropsType

const MapStateToProps = (state: AppStateType) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch<GlobalACType>) => {
    return {
        toggle: (userId: number) => dispatch(toggleAC(userId)),
        setUser: (users: UsersType) => dispatch(setUsersAC(users)),
        setTotalUsersCount: (usersCount: number) => dispatch(setTotalUsersCountAC(usersCount)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage))
    }
}

const UsersContainer = connect(MapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer