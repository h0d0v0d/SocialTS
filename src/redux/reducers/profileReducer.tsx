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
  postsData: [
    {id: v1(), userText: 'Это мой первый пост'},
    {id: v1(), userText: 'Это мой второй пост'},
  ],
  postText: '',
}

function profileReducer(state : ProfilePageType = initialState, action: ActionType) {
    switch (action.type) {
      case ADD_NEW_POST:
        const newState = {
          postsData: [...state.postsData, {id: v1(), userText: state.postText}],
          postText: ''
        }
        return newState 
      case CHANGE_POST_TEXT:
        const newState2 = {
          ...state,
          postText: action.text
        }
        return newState2
      default: 
        return state
    }
}

export default profileReducer

export function changePostTextActionCreator(text: string) {
  return {type: CHANGE_POST_TEXT, text: text}
}

export function addPostActionCreator() {
  return {type: ADD_NEW_POST}
}

export const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'
export const ADD_NEW_POST = 'ADD_NEW_POST'