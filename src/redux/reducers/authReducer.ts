import {ActionType } from "../store"

type AuthType = {
    id: number | null
    login: string | null 
    email: string | null
    status: string | null
    photo: string 
    isAuth: boolean
    isFetching: boolean
}

const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    status: null,
    photo: '',
    isAuth: false,
    isFetching: false,
}

function authReducer(state: AuthType=initialState, action: ActionType): AuthType {
    switch(action.type) {
        case SET_AUTH_USER_DATA: return {...state, ...action.data, isAuth: true}
        case SET_PROFILE_USER_DATA: return {...state, photo: action.photo, status: action.status}
        default: return state
    }   
} 
 
export default authReducer

export const setAuthUserDataAC = (id: number, email: string, login: string): SetAuthUserDataType => ({type: SET_AUTH_USER_DATA, data: {id, email, login}})
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
type SetAuthUserDataType = {type: 'SET_AUTH_USER_DATA', data: {id: number, email: string, login: string}}

export const setProfileUserDataAC = (status: string, photo: string): setProfileUserDataType => ({type: SET_PROFILE_USER_DATA, status, photo})
const SET_PROFILE_USER_DATA = 'SET_PROFILE_USER_DATA'
type setProfileUserDataType = {type: 'SET_PROFILE_USER_DATA', status: string, photo: string}
