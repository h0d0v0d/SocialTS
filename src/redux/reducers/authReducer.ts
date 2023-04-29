import { ThunkType } from "../store"
import { API } from "../../api/api"

const initialState = {
    id: 0,
    login: '', 
    email: '',
    status: '',
    photo: '',
    isAuth: false,
    isFetching: false,
}

export type AuthType = typeof initialState

function authReducer(state: AuthType=initialState, action: AuthReducerActionType): AuthType {
    switch(action.type) {
        case 'SET_AUTH_USER_DATA': return {...state, ...action.data, isAuth: true}
        case 'SET_PROFILE_USER_DATA': return {...state, photo: action.photo, status: action.status}
        default: return state
    }   
}  
 
export default authReducer

export type AuthReducerActionType = ReturnType<PropertiesType<typeof actions>> 
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never

export const actions = {
    setAuthUserDataAC: (id: number, email: string, login: string) => ({type: 'SET_AUTH_USER_DATA', data: {id, email, login}} as const),
    setProfileUserDataAC: (status: string, photo: string) => ({type: 'SET_PROFILE_USER_DATA', status, photo} as const)
}

export const getAuthUserDataTC = (): ThunkType => async dispatch => {
    API
    .auth()
    .then((res) => {
        if (res.resultCode === 0) {
            const {id, email, login} = res.data
            dispatch(actions.setAuthUserDataAC(id, email, login))
        }
    }) 
}

export const getProfileUserDataTC = (id: number): ThunkType => async dispatch => {
    API
    .getProfileUserData(id)
    .then((res) => {
        const resData = {aboutMe: 'Это блять мой статус', photo: '54'}
        dispatch(actions.setProfileUserDataAC(resData.aboutMe, resData.photo))
        console.log(res)
    }) 
}
