import React, {Component} from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {AppStateType} from '../../Redux/Redux-store';


import {
    getUsers,
    setCurrentPage,
    toggleInProgress,
    UsersType,  unFollow, follow
} from "../../Redux/Users-reducer";

import Preloader from "../utils/preloader/Preloader";



export class UsersAPI extends Component<MapStateToPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onSetCurrentPage = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? Preloader : null}
            <Users users={this.props.users}
                   totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   setCurrentPage={this.onSetCurrentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
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
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    setCurrentPage: (num: number) => void
    getUsers:(currentPage:number,pageSize:number)=>void
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
    unFollow, follow,
    setCurrentPage,
     toggleInProgress, getUsers
})(UsersAPI);

export default UsersContainer