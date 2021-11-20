import React, {Component} from 'react';
import {connect} from 'react-redux';
import Users, {UserType} from './Users';
import {AppStateType} from '../../Redux/Redux-store';


import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggle, toggleInProgress, toggleIsFetching,
    UsersType
} from "../../Redux/Users-reducer";

import Preloader from "../utils/preloader/Preloader";
import {usersAPI} from "../../Api/ApiJs";


export class UsersAPI extends Component<MapStateToPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onSetCurrentPage = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? Preloader : null}
            <Users users={this.props.users}
                   totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   setCurrentPage={this.onSetCurrentPage}
                   toggle={this.props.toggle}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

type MapStateToPropsType = {
    users: UsersType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean | null
    followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
    toggle: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (num: number) => void
    setTotalUsersCount: (usersCount: number) => void
    toggleIsFetching: (isFetching: boolean | null) => void
}

export type UsersComponentType = MapStateToPropsType | MapDispatchToPropsType

const MapStateToProps = (state: AppStateType) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


const UsersContainer = connect(MapStateToProps, {
    toggle, setUsers, setTotalUsersCount,
    setCurrentPage,
    toggleIsFetching, toggleInProgress
})(UsersAPI);

export default UsersContainer