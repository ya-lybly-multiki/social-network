import React, {Component} from 'react';
import {connect} from 'react-redux';
import Users, {UserType} from './Users';
import {AppStateType} from '../../Redux/Redux-store';



import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggle, toggleIsFetching,
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
                this.props.setUsers(response.data.items)
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
                this.props.setUsers(response.data.items)
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

            />
        </>
    }
}

type MapStateToPropsType = {
    users: UsersType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching:boolean | null
}

 type MapDispatchToPropsType = {
    toggle: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
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


const UsersContainer = connect(MapStateToProps, {toggle, setUsers, setTotalUsersCount,
    setCurrentPage,
    toggleIsFetching})(UsersAPI);

export default UsersContainer