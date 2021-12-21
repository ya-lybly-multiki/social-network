import {AppStateType} from "./Redux-store";
import {createSelector} from "reselect";
import {UsersType} from "./Users-reducer";

export const getUsers = (state:AppStateType) => {
    return state.usersPage.users
}

export const getUsersSelector = (state:AppStateType) => {
    return getUsers(state).filter( u => true)
}

export const getUsersSuper = createSelector(getUsers,
    (users:UsersType)=>{

    return users.filter(u => true)
})

export const getPageSizeSelector = (state:AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCountSelector = (state:AppStateType) => {
    return state.usersPage.totalUserCount
}

export const getCurrentPageSelector = (state:AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetchingSelector = (state:AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgressSelector = (state:AppStateType) => {
    return state.usersPage.followingInProgress
}