import { Dispatch } from "redux"
import { authAPI, getProfileUserData } from "../../api/api"

export type AuthType = {
    id: number
    login: string | null 
    email: string | null
    status: string | null
    photo: string 
    isAuth: boolean
    isFetching: boolean
}
const initialState: AuthType = {
    id: 26914,
    login: null, 
    email: null,
    status: null,
    photo: '',
    isAuth: false,
    isFetching: false,
}

function authReducer(state: AuthType=initialState, action: AuthReducerActionType): AuthType {
    switch(action.type) {
        case SET_AUTH_USER_DATA: return {...state, ...action.data, isAuth: true}
        case SET_PROFILE_USER_DATA: return {...state, photo: action.photo, status: action.status}
        default: return state
    }   
} 
 
export default authReducer

type AuthReducerActionType = SetAuthUserDataType | setProfileUserDataType

export const setAuthUserDataAC = (id: number, email: string, login: string): SetAuthUserDataType => ({type: SET_AUTH_USER_DATA, data: {id, email, login}})
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
type SetAuthUserDataType = {type: 'SET_AUTH_USER_DATA', data: {id: number, email: string, login: string}}

export const setProfileUserDataAC = (status: string, photo: string): setProfileUserDataType => ({type: SET_PROFILE_USER_DATA, status, photo})
const SET_PROFILE_USER_DATA = 'SET_PROFILE_USER_DATA'
type setProfileUserDataType = {type: 'SET_PROFILE_USER_DATA', status: string, photo: string}



export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI()
        .then((data) => {
            const {id, email, login} = data
            dispatch(setAuthUserDataAC(id, email, login))
        })
}

export const getProfileUserDataTC = (id: number) => (dispatch: Dispatch) => {
    getProfileUserData(id)
        .then((res) => {
            const resData = {aboutMe: 'Это блять мой статус', photo: '54'}
            dispatch(setProfileUserDataAC(resData.aboutMe, resData.photo))
        })
}
