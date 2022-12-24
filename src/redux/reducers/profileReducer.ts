import { v1 } from "uuid"

import {ActionType} from "../store"

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
  aboutMe: string | null,
  contacts: UserContactsType,
  fullName: string,
  lookingForAJob: boolean,
  lookingForAJobDescription: string | null,
  photos: {small: string | null, large: string | null},
  userId: number | string
}
export type ProfilePageType = {
  userData: UserDataType, 
  postsData: Array<PostItemType>
  postText: string
}

const  initialState: ProfilePageType = {
  userData: {
    aboutMe: "",
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
  },
  postsData: [
    {id: v1(), userText: 'Это мой первый пост'},
    {id: v1(), userText: 'Это мой второй пост'},
  ],
  postText: '',
} 

function profileReducer(state : ProfilePageType = initialState, action: ActionType) {
    switch (action.type) {
      case SET_USER_DATA : return {...state, userData: action.userData}
      case SET_POSTS: return {...state, postsData: [...state.postsData, ...action.posts]}
      case ADD_NEW_POST: 
        const newPostItem: PostItemType = {id: v1(), userText: state.postText}
        return {...state, postsData: [...state.postsData, newPostItem], postText: ''} 
      case CHANGE_POST_TEXT: return {...state, postText: action.text}
      default: 
        return state
    }
}

export default profileReducer

export const setPostsAC = (posts: Array<PostItemType>) => ({type: SET_POSTS, posts: posts})
export const changePostTextAC = (text: string) => ({type: CHANGE_POST_TEXT, text: text})
export const addPostAC = () => ({type: ADD_NEW_POST})
export const setUserDataAC = (userData: UserDataType) => ({type: SET_USER_DATA, userData})

const SET_POSTS = 'SET_POSTS'
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'
const ADD_NEW_POST = 'ADD_NEW_POST' 
const SET_USER_DATA = 'SET_USER_DATA'