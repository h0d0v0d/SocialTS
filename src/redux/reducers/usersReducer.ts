import { getUsersAPI } from "../../api/api"
import {ActionType} from "../store"

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

function usersReducer(state: UsersPageType=initialState, action: ActionType): UsersPageType {
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

export const followAC = (userId: number) => {return {type: FOLLOW, userId}}
export const unFollowAC = (userId: number) => {return {type: UNFOLLOW, userId}}
export const setUsersAC = (users: UserItemType[]) => {return {type: SET_USERS, users}}
export const setCurrentPageAC = (newCurrentPage: number) => {return {type: SET_CURRENT_PAGE, newCurrentPage}}
export const setTotalUsersCountAC = (newTotalUsersCount: number) => {return {type: SET_TOTAL_USERS_COUNT, newTotalUsersCount}}
export const toogleIsFetchingAC = (isFetching: boolean) => {return {type: TOOGLE_IS_FETCHING, isFetching}}
export const toogleFollowingIsFetchingOnAC = (followinfIsFecthingUserId: number) => {return {type: FOLLOWING_IS_FETCHING_ON, followinfIsFecthingUserId}}
export const toogleFollowingIsFetchingOffAC = (followinfIsFecthingUserId: number) => {return {type: FOLLOWING_IS_FETCHING_FALSE, followinfIsFecthingUserId}}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'
const FOLLOWING_IS_FETCHING_ON = 'FOLLOWING_IS_FETCHING_ON'
const FOLLOWING_IS_FETCHING_FALSE = 'FOLLOWING_IS_FETCHING_FALSE'

export const getUsersTC = (currentPage: number) => (dispatch: any) => {
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
