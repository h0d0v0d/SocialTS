import { v1 } from "uuid"

import { ThunkType } from "../store"
import { API } from "../../api/api"

export type PostItemType = {
  id: string, 
  userText: string,
}
type UserContactsType = {
  facebook: string | null,
  website: string | null,
  vk: string | null,
  twitter: string | null,
  instagram: string | null,
  youtube: string | null,
  github: string | null,
  mainLink: string | null,
}
export type UserDataType = {
  aboutMe: string,
  contacts: UserContactsType, 
  fullName: string,
  lookingForAJob: boolean,
  lookingForAJobDescription: string | null,
  photos: {small: string | null, large: string | null},
  userId: number | string
}
export type ProfilePageType = typeof initialState

const initialState = {
  userData: {
    aboutMe: "Это про меня",
    contacts: {
        facebook: "facebook.com", 
        website: null, 
        vk: "vk.com/dimych", 
        twitter: "https://twitter.com/@sdf", 
        instagram: "instagra.com/sds",
        youtube: null,
        github: "github.com",
        mainLink: null},
    fullName: "",
    lookingForAJob: true,
    lookingForAJobDescription: "РЅРµ РёС‰Сѓ, Р° РґСѓСЂР°С‡СѓСЃСЊ",
    photos: {
        small: null, 
        large: null
    },
    userId: 1
  } as UserDataType,
  userStatus: '',
  postsData: [
    {id: v1(), userText: 'Это мой первый пост'},
    {id: v1(), userText: 'Это мой второй пост'},
  ] as PostItemType[],
  postText: '', 
} 

function profileReducer(state : ProfilePageType = initialState, action: ProfileReducerActionType): ProfilePageType {
    switch (action.type) {
      case 'SET_USER_DATA' : return {...state, userData: action.userData}
      case 'SET_USER_STATUS': return {...state, userStatus: action.userStatus}
      case 'SET_POSTS': return {...state, postsData: [...state.postsData, ...action.posts]}
      case 'ADD_POST': return {...state, postsData: [...state.postsData, {id: v1(), userText: state.postText}], postText: ''}  
      case 'CHANGE_POST_TEXT': return {...state, postText: action.text}
      default: return state
    }
}

export default profileReducer

export type ProfileReducerActionType = ReturnType<PropertiesType<typeof profileReducerActions>> 
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never

export const profileReducerActions = {
  setUserDataAC: (userData: UserDataType) => ({type: 'SET_USER_DATA', userData} as const),
  setUserStatusAC: (userStatus: string) => ({type: 'SET_USER_STATUS', userStatus} as const),
  setPosts: (posts: PostItemType[]) => ({type: 'SET_POSTS', posts} as const),
  addPost: () => ({type: 'ADD_POST'} as const),
  changePostText: (text: string) => ({type: 'CHANGE_POST_TEXT', text} as const),
}

export const getProfileUserDataTC = (id: number): ThunkType => async dispatch => {
  API
  .getProfileUserData(id)
  .then((res) => {
    dispatch(profileReducerActions.setUserDataAC(res.data))
  })
  API
  .getStatus(id)
  .then((res) => {
    dispatch(profileReducerActions.setUserStatusAC(res))
  })
}  

export const changeStatusTC = (newStatus: string): ThunkType => dispatch => {
  API
  .changeStatus(newStatus)
  .then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(profileReducerActions.setUserStatusAC(newStatus))
    }
  })
}
 


 