import { Dispatch } from "redux"
import { v1 } from "uuid"

import { getProfileUserData } from "../../api/api"

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

const initialState: ProfilePageType = {
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

function profileReducer(state : ProfilePageType = initialState, action: ProfileReducerActionType): ProfilePageType {
    switch (action.type) {
      case SET_USER_DATA : return {...state, userData: action.userData}
      case SET_POSTS: return {...state, postsData: [...state.postsData, ...action.posts]}
      case ADD_POST: 
        const newPostItem: PostItemType = {id: v1(), userText: state.postText}
        return {...state, postsData: [...state.postsData, newPostItem], postText: ''} 
      case CHANGE_POST_TEXT: return {...state, postText: action.text}
      default: return state
    }
}

export default profileReducer


type ProfileReducerActionType = SetUserDataType | SetPostsType | AddPostType | ChangePostTextType

export const setUserDataAC = (userData: UserDataType): SetUserDataType => ({type: SET_USER_DATA, userData})
const SET_USER_DATA = 'SET_USER_DATA'
type SetUserDataType = {type: 'SET_USER_DATA', userData: UserDataType}

export const setPostsAC = (posts: PostItemType[]): SetPostsType => ({type: SET_POSTS, posts})
const SET_POSTS = 'SET_POSTS'
type SetPostsType = {type: 'SET_POSTS', posts: PostItemType[]}

export const addPostAC = (): AddPostType => ({type: ADD_POST})
const ADD_POST = 'ADD_POST' 
type AddPostType = {type: 'ADD_POST'}

export const changePostTextAC = (text: string): ChangePostTextType => ({type: CHANGE_POST_TEXT, text})
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'
type ChangePostTextType = {type: 'CHANGE_POST_TEXT', text: string}

export const getProfileUserDataTc = (id: number) => (dispatch: Dispatch) => {
  getProfileUserData(id)
  .then((res) => {
    dispatch(setUserDataAC(res.data))
  })
} 



