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
  postsData: [
    {id: v1(), userText: 'Это мой первый пост'},
    {id: v1(), userText: 'Это мой второй пост'},
  ] as PostItemType[],
  postText: '',
  changedStatus: false,
} 

function profileReducer(state : ProfilePageType = initialState, action: ProfileReducerActionType): ProfilePageType {
    switch (action.type) {
      case 'SET_USER_DATA' : return {...state, userData: action.userData}
      case 'SET_POSTS': return {...state, postsData: [...state.postsData, ...action.posts]}
      case 'ADD_POST': 
        const newPostItem: PostItemType = {id: v1(), userText: state.postText}
        return {...state, postsData: [...state.postsData, newPostItem], postText: ''}  
      case 'CHANGE_POST_TEXT': return {...state, postText: action.text}
      case 'CHANGED_STATUS': return {...state, changedStatus: action.changedStatus}
      default: return state
    }
}

export default profileReducer

type ProfileReducerActionType = ReturnType<PropertiesType<typeof actions>> 
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never

export const actions = {
  setUserDataAC: (userData: UserDataType) => ({type: 'SET_USER_DATA', userData} as const),
  setPostsAC: (posts: PostItemType[]) => ({type: 'SET_POSTS', posts} as const),
  addPostAC: () => ({type: 'ADD_POST'} as const),
  changePostTextAC: (text: string) => ({type: 'CHANGE_POST_TEXT', text} as const),
  toogleChangedStatusAC: (changedStatus: boolean) => ({type: 'CHANGED_STATUS', changedStatus} as const)
}

export const getProfileUserDataTc = (id: number) => (dispatch: Dispatch) => {
  getProfileUserData(id)
  .then((res) => {
    dispatch(actions.setUserDataAC(res.data))
  })
} 



