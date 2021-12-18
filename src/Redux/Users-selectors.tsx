import {AppStateType} from "./Redux-store";

export const getUsersSelector = (state:AppStateType) => {
  return state.usersPage.users
}

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