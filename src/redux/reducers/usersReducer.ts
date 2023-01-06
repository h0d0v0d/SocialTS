import { Dispatch } from "redux"

import { followAPI, getUsersAPI, unFollowAPI } from "../../api/api"

export type UserItemType = {
    name: string,
    id: number,
    photos: {small: null | string, large: null | string}
    status: null | string,
    followed: boolean
}
export type UsersPageType = {
    usersData: UserItemType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFetchingFollowingUsers: number[]
}
const initialState: UsersPageType = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 25, 
    currentPage: 1,
    isFetching: false,
    isFetchingFollowingUsers: []
}

function usersReducer(state: UsersPageType=initialState, action: UsersReducerActionType): UsersPageType {
    switch(action.type) {
        case FOLLOW: { return { ...state, usersData: state.usersData.map(u => u.id === action.userId ? {...u, followed: true} : u)} }
        case UNFOLLOW: { return { ...state, usersData: state.usersData.map(u => u.id === action.userId ? {...u, followed: false} : u)} }
        case SET_USERS: { return { ...state, usersData: [...action.users]} }
        case SET_CURRENT_PAGE: {return {...state, currentPage: action.newCurrentPage}}
        case SET_TOTAL_USERS_COUNT: {return {...state, totalUsersCount: action.newTotalUsersCount}}
        case TOOGLE_IS_FETCHING: {return {...state, isFetching: action.isFetching}} 
        case FOLLOWING_IS_FETCHING_ON: {return {...state, isFetchingFollowingUsers: [...state.isFetchingFollowingUsers, action.followinfIsFecthingUserId]}}
        case FOLLOWING_IS_FETCHING_FALSE: {return {...state, isFetchingFollowingUsers: state.isFetchingFollowingUsers.filter(el => el !== action.followinfIsFecthingUserId)}}
        default: { return state }
    }    
}
 
export default usersReducer

type UsersReducerActionType = FollowType |
                              UnFollowType |
                              SetUsersType |
                              SetCurrentPageType |
                              SetTotalUsersCountType |
                              ToogleIsFetchingType | 
                              ToogleFollowingIsFetchingOnType |
                              ToogleFollowingIsFetchingOffType

export const followAC = (userId: number): FollowType => {return {type: FOLLOW, userId}}
const FOLLOW = 'FOLLOW'
type FollowType = {type: 'FOLLOW', userId: number}

export const unFollowAC = (userId: number): UnFollowType => {return {type: UNFOLLOW, userId}}
const UNFOLLOW = 'UNFOLLOW'
type UnFollowType = {type: 'UNFOLLOW', userId: number}

export const setUsersAC = (users: UserItemType[]): SetUsersType => {return {type: SET_USERS, users}}
const SET_USERS = 'SET_USERS'
type SetUsersType = {type: 'SET_USERS', users: UserItemType[]}

export const setCurrentPageAC = (newCurrentPage: number): SetCurrentPageType => {return {type: SET_CURRENT_PAGE, newCurrentPage}}
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
type SetCurrentPageType = {type: 'SET_CURRENT_PAGE', newCurrentPage: number}

export const setTotalUsersCountAC = (newTotalUsersCount: number): SetTotalUsersCountType => {return {type: SET_TOTAL_USERS_COUNT, newTotalUsersCount}}
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
type SetTotalUsersCountType = {type: 'SET_TOTAL_USERS_COUNT', newTotalUsersCount: number}

export const toogleIsFetchingAC = (isFetching: boolean): ToogleIsFetchingType => {return {type: TOOGLE_IS_FETCHING, isFetching}}
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'
type ToogleIsFetchingType = {type: 'TOOGLE_IS_FETCHING', isFetching: boolean}

export const toogleFollowingIsFetchingOnAC = (followinfIsFecthingUserId: number): ToogleFollowingIsFetchingOnType => {return {type: FOLLOWING_IS_FETCHING_ON, followinfIsFecthingUserId}}
const FOLLOWING_IS_FETCHING_ON = 'FOLLOWING_IS_FETCHING_ON'
type ToogleFollowingIsFetchingOnType = {type: 'FOLLOWING_IS_FETCHING_ON', followinfIsFecthingUserId: number}

export const toogleFollowingIsFetchingOffAC = (followinfIsFecthingUserId: number): ToogleFollowingIsFetchingOffType => {return {type: FOLLOWING_IS_FETCHING_FALSE, followinfIsFecthingUserId}}
const FOLLOWING_IS_FETCHING_FALSE = 'FOLLOWING_IS_FETCHING_FALSE'
type ToogleFollowingIsFetchingOffType = {type: 'FOLLOWING_IS_FETCHING_FALSE', followinfIsFecthingUserId: number}



export const getUsersTC = (currentPage: number) => (dispatch: Dispatch) => {
    dispatch(toogleIsFetchingAC(true))
        getUsersAPI(currentPage)
        .then((data) => {
            setTimeout(() => {
                dispatch(setTotalUsersCountAC(data.totalCount)) 
                dispatch(setUsersAC(data.items))
                dispatch(toogleIsFetchingAC(false))
            }, 1000)
        })
}

export const onFollowOrUnfollowTC = (userId: number, isFollow: boolean) => (dispatch: Dispatch) => {
    dispatch(toogleFollowingIsFetchingOnAC(userId))
    if (isFollow) {
        setTimeout(() => {
            unFollowAPI(userId)
            .then((data) => {
                if (data.resultCode === 0) { 
                    dispatch(unFollowAC(userId))
                    dispatch(toogleFollowingIsFetchingOffAC(userId))
                }
            })
        }, 1000)
    }
    if (!isFollow) {
        setTimeout(() => {
            followAPI(userId) 
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userId))
                    dispatch(toogleFollowingIsFetchingOffAC(userId))
                }
            })
        }, 1000)
    } 
}