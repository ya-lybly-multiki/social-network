import React, {Component} from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {AppStateType} from '../../Redux/Redux-store';
import {
    getUsers,
    setCurrentPage,
    toggleInProgress,
    UsersType, unFollow, follow
} from "../../Redux/Users-reducer";

import Preloader from "../utils/preloader/Preloader";
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSuper
} from "../../Redux/Users-selectors";
import {RequestStatusType} from "../../Redux/App-reducer";


export class UsersApi extends Component<UsersComponentType, AppStateType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onSetCurrentPage = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching === 'loading' ? <Preloader/> :
                < Users users={this.props.users}
                        totalUserCount={this.props.totalUserCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        setCurrentPage={this.onSetCurrentPage}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        followingInProgress={this.props.followingInProgress}
                />
            }
        </>
    }
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSizeSelector(state),
        totalUserCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
}
type MapStateToPropsType = {
    users: UsersType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: RequestStatusType | null
    followingInProgress: number[]
}

type MapDispatchToPropsType = {
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    setCurrentPage: (num: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type UsersComponentType = MapStateToPropsType & MapDispatchToPropsType

const UsersContainer = connect(MapStateToProps, {
    unFollow, follow,
    setCurrentPage,
    toggleInProgress, getUsers
})(UsersApi);


export default UsersContainer