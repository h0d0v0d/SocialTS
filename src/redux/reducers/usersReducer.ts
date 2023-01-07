import { Dispatch } from "redux"

import { followAPI, getUsersAPI, unFollowAPI } from "../../api/api"

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

type UsersReducerActionType = ReturnType<PropertiesType<typeof actions>> 
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never

export const actions = {
    followAC:(userId: number) => ({type: 'FOLLOW', userId} as const),
    unFollowAC: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsersAC: (users: UserItemType[]) => ({type: 'SET_USERS', users} as const),
    setCurrentPageAC: (newCurrentPage: number) => ({type: 'SET_CURRENT_PAGE', newCurrentPage} as const),
    setTotalUsersCountAC: (newTotalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', newTotalUsersCount} as const),
    toogleIsFetchingAC: (isFetching: boolean) => ({type: 'TOOGLE_IS_FETCHING', isFetching} as const),
    toogleFollowingIsFetchingOnAC: (followinfIsFecthingUserId: number) => ({type: 'FOLLOWING_IS_FETCHING_ON', followinfIsFecthingUserId} as const),
    toogleFollowingIsFetchingOffAC: (followinfIsFecthingUserId: number) => ({type: 'FOLLOWING_IS_FETCHING_FALSE', followinfIsFecthingUserId} as const)
} 

export const getUsersTC = (currentPage: number) => (dispatch: Dispatch) => {
    dispatch(actions.toogleIsFetchingAC(true))
        getUsersAPI(currentPage)
        .then((data) => {
            setTimeout(() => {
                dispatch(actions.setTotalUsersCountAC(data.totalCount)) 
                dispatch(actions.setUsersAC(data.items))
                dispatch(actions.toogleIsFetchingAC(false))
            }, 1000)
        })
}

export const onFollowOrUnfollowTC = (userId: number, isFollow: boolean) => (dispatch: Dispatch) => {
    dispatch(actions.toogleFollowingIsFetchingOnAC(userId))
    if (isFollow) {
        setTimeout(() => {
            unFollowAPI(userId)
            .then((data) => {
                if (data.resultCode === 0) { 
                    dispatch(actions.unFollowAC(userId))
                    dispatch(actions.toogleFollowingIsFetchingOffAC(userId))
                }
            })
        }, 1000)
    }
    if (!isFollow) {
        setTimeout(() => {
            followAPI(userId) 
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(actions.followAC(userId))
                    dispatch(actions.toogleFollowingIsFetchingOffAC(userId))
                }
            })
        }, 1000)
    } 
}