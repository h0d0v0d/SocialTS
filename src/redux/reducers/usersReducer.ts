import { ThunkType } from "../store"

import { API } from "../../api/api"

export type UserItemType = {
    name: string,
    id: number,
    photos: {small: null | string, large: null | string}
    status: null | string,
    followed: boolean
}
export type UsersPageType = typeof initialState
const initialState = {
    usersData: [] as UserItemType[],
    pageSize: 5,
    totalUsersCount: 25, 
    currentPage: 1,
    isFetching: false,
    isFetchingFollowingUsers: [] as number[]
} 

function usersReducer(state: UsersPageType=initialState, action: UsersReducerActionType): UsersPageType {
    switch(action.type) {
        case 'FOLLOW': { return { ...state, usersData: state.usersData.map(u => u.id === action.userId ? {...u, followed: true} : u)} }
        case 'UNFOLLOW': { return { ...state, usersData: state.usersData.map(u => u.id === action.userId ? {...u, followed: false} : u)} }
        case 'SET_USERS': { return { ...state, usersData: [...action.users]} }
        case 'SET_CURRENT_PAGE': {return {...state, currentPage: action.newCurrentPage}}
        case 'SET_TOTAL_USERS_COUNT': {return {...state, totalUsersCount: action.newTotalUsersCount}}
        case 'TOOGLE_IS_FETCHING': {return {...state, isFetching: action.isFetching}} 
        case 'FOLLOWING_IS_FETCHING_ON': {return {...state, isFetchingFollowingUsers: [...state.isFetchingFollowingUsers, action.followinfIsFecthingUserId]}}
        case 'FOLLOWING_IS_FETCHING_FALSE': {return {...state, isFetchingFollowingUsers: state.isFetchingFollowingUsers.filter(el => el !== action.followinfIsFecthingUserId)}}
        default: { return state }
    }    
}
 
export default usersReducer

export type UsersReducerActionType = ReturnType<PropertiesType<typeof usersReducerActions>> 
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never

export const usersReducerActions = {
    followAC:(userId: number) => ({type: 'FOLLOW', userId} as const),
    unFollowAC: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsersAC: (users: UserItemType[]) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (newCurrentPage: number) => ({type: 'SET_CURRENT_PAGE', newCurrentPage} as const),
    setTotalUsersCountAC: (newTotalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', newTotalUsersCount} as const),
    toogleIsFetchingAC: (isFetching: boolean) => ({type: 'TOOGLE_IS_FETCHING', isFetching} as const),
    toogleFollowingIsFetchingOnAC: (followinfIsFecthingUserId: number) => ({type: 'FOLLOWING_IS_FETCHING_ON', followinfIsFecthingUserId} as const),
    toogleFollowingIsFetchingOffAC: (followinfIsFecthingUserId: number) => ({type: 'FOLLOWING_IS_FETCHING_FALSE', followinfIsFecthingUserId} as const)
} 

export const setUsers = (currentPage: number): ThunkType => dispatch => {
    dispatch(usersReducerActions.toogleIsFetchingAC(true))
        API
        .getUsers(currentPage)
        .then((data) => {
            setTimeout(() => {
                dispatch(usersReducerActions.setTotalUsersCountAC(data.totalCount)) 
                dispatch(usersReducerActions.setUsersAC(data.items)) 
                dispatch(usersReducerActions.toogleIsFetchingAC(false))
            }, 1000) 
        })
}

export const onFollowOrUnfollow = (userId: number, isFollow: boolean): ThunkType => dispatch => {
    dispatch(usersReducerActions.toogleFollowingIsFetchingOnAC(userId))
    if (isFollow) {
        setTimeout(() => {
            API
            .unFollow(userId)
            .then((data) => {
                if (data.resultCode === 0) { 
                    dispatch(usersReducerActions.unFollowAC(userId))
                    dispatch(usersReducerActions.toogleFollowingIsFetchingOffAC(userId)) 
                }
            })
        }, 1000)
    }
    if (!isFollow) {
        setTimeout(() => {
            API
            .follow(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(usersReducerActions.followAC(userId))
                    dispatch(usersReducerActions.toogleFollowingIsFetchingOffAC(userId))
                }
            })
        }, 1000)
    } 
}