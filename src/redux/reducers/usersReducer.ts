import { v1 } from "uuid"

import {ActionType} from "../store"

const png: string = 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'

export type UserItemType = {
    userId: string
    name: string,
    status: string,
    location: {country: string, city: string},
    png: string,
    isFollow: boolean,
}
export type UsersPageType = {
    usersData: Array<UserItemType>
}

const initialState: UsersPageType = {
    usersData: []
}

function usersReducer(state: UsersPageType=initialState, action: ActionType) {
    switch(action.type) {
        case FOLLOW: { return { ...state, usersData: state.usersData.map(u => u.userId === action.userId ? {...u, isFollow: true} : u)} }
        case UNFOLLOW: { return { ...state, usersData: state.usersData.map(u => u.userId === action.userId ? {...u, isFollow: false} : u)} }
        case SET_USERS: { return { ...state, usersData: [...state.usersData, ...action.users]} }
        default: { return state }
    }    
}
 
export default usersReducer

export const followActionCreator = (userId: string) => {return {type: FOLLOW, userId: userId}}
export const unfFollowActionCreator = (userId: string) => {return {type: UNFOLLOW, userId: userId}}
export const setUsersActionCreator = (users: Array<UserItemType>) => {return {type: SET_USERS, users: users}}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

