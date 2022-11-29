import { v1 } from "uuid"

import {ActionType} from "../store"

export type PostItemType = {
  id: string, 
  userText: string,
}
export type ProfilePageType = {
  postsData: Array<PostItemType>, 
  postText: string
}

const  initialState: ProfilePageType = {
  postsData: [],
  postText: '',
}

function profileReducer(state : ProfilePageType = initialState, action: ActionType) {
    switch (action.type) {
      case SET_POSTS: return {...state, postsData: [...state.postsData, ...action.posts]}
      case ADD_NEW_POST: 
        const newPostItem: PostItemType = {id: v1(), userText: state.postText}
        return {postsData: [...state.postsData, newPostItem], postText: ''} 
      case CHANGE_POST_TEXT: return {...state, postText: action.text}
      default: 
        return state
    }
}

export default profileReducer

export const setPostsActionCreator = (posts: Array<PostItemType>) => {return {type: SET_POSTS, posts: posts}}
export const changePostTextActionCreator = (text: string) => {return {type: CHANGE_POST_TEXT, text: text}}
export const addPostActionCreator = () => {return {type: ADD_NEW_POST}}

const SET_POSTS = 'SET_POSTS'
export const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'
export const ADD_NEW_POST = 'ADD_NEW_POST'