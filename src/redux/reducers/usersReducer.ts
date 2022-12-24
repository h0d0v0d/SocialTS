import {ActionType} from "../store"

export type UserItemType = {
    name: string,
    id: number,
    photos: {small: null | string, large: null | string}
    status: null | string,
    followed: boolean
}
export type UsersPageType = {
    usersData: Array<UserItemType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
const initialState: UsersPageType = {
    usersData: [ 
        /* {
            followed: true,
            id: 1,
            name: "Shubert",
            photos: {small: null, large: null},
            status: null
        },
        {
            followed: false,
            id: 2,
            name: "Igor",
            photos: {small: null, large: null},
            status: null
        },
        {
            followed: true,
            id: 3,
            name: "Nika",
            photos: {small: null, large: null},
            status: null
        }  */
    ],
    pageSize: 5,
    totalUsersCount: 25, 
    currentPage: 1,
    isFetching: false
}

function usersReducer(state: UsersPageType=initialState, action: ActionType) {
    switch(action.type) {
        case FOLLOW: { return { ...state, usersData: state.usersData.map(u => u.id === action.userId ? {...u, followed: true} : u)} }
        case UNFOLLOW: { return { ...state, usersData: state.usersData.map(u => u.id === action.userId ? {...u, followed: false} : u)} }
        case SET_USERS: { return { ...state, usersData: [...action.users]} }
        case SET_CURRENT_PAGE: {return {...state, currentPage: action.newCurrentPage}}
        case SET_TOTAL_USERS_COUNT: {return {...state, totalUsersCount: action.newTotalUsersCount}}
        case TOOGLE_IS_FETCHING: {return {...state, isFetching: action.isFetching}}
        default: { return state }
    }    
}
 
export default usersReducer

export const followAC = (userId: number) => {return {type: FOLLOW, userId: userId}}
export const unfFollowAC = (userId: number) => {return {type: UNFOLLOW, userId: userId}}
export const setUsersAC = (users: Array<UserItemType>) => {return {type: SET_USERS, users: users}}
export const setCurrentPageAC = (newCurrentPage: number) => {return {type: SET_CURRENT_PAGE, newCurrentPage}}
export const setTotalUsersCountAC = (newTotalUsersCount: number) => {return {type: SET_TOTAL_USERS_COUNT, newTotalUsersCount}}
export const toogleIsFetchingAC = (isFetching: boolean) => {return {type: TOOGLE_IS_FETCHING, isFetching}}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'
