import React, {Component} from 'react';
import {connect} from 'react-redux';
import Users, {UserType} from './Users';
import {AppStateType} from '../../Redux/Redux-store';
import {Dispatch} from 'redux';


import {
    GlobalACType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleAC, toggleIsFetchingAC,
    UsersType
} from "../../Redux/Users-reducer";

import axios from "axios";
import Preloader from "../utils/preloader/Preloader";

export class UsersAPI extends Component<MapStateToPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUser(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onSetCurrentPage = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUser(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? Preloader  : null}
            <Users users={this.props.users}
                        totalUserCount={this.props.totalUserCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        setCurrentPage={this.onSetCurrentPage}
                        toggle={this.props.toggle}
                        setUser={this.props.setUser}
            />
        </>
    }
}

export type MapStateToPropsType = {
    users: UsersType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching:boolean | null
}

export type MapDispatchToPropsType = {
    users: Array<UserType>
    toggle: (userId: number) => void
    setUser: (users: Array<UserType>) => void
    setCurrentPage: (num: number) => void
    setTotalUsersCount: (usersCount: number) => void
    toggleIsFetching:(isFetching:boolean | null) => void
}

export type UsersComponentType = MapStateToPropsType | MapDispatchToPropsType

const MapStateToProps = (state: AppStateType) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch<GlobalACType>) => {
    return {
        toggle: (userId: number) => dispatch(toggleAC(userId)),
        setUser: (users: UsersType) => dispatch(setUsersAC(users)),
        setTotalUsersCount: (usersCount: number) => dispatch(setTotalUsersCountAC(usersCount)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        toggleIsFetching:(isFetching:boolean | null) => dispatch(toggleIsFetchingAC(isFetching))
    }
}

const UsersContainer = connect(MapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer