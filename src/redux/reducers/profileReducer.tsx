import { v1 } from "uuid"

import store, { ProfilePageType, ActionType} from "../store"

const  initialState = {
  postsData: [
    {id: v1(), userText: 'Это мой первый пост'},
    {id: v1(), userText: 'Это мой второй пост'},
  ],
  postText: '',
}

function profileReducer(state : ProfilePageType = initialState, action: ActionType) {
    switch (action.type) {
      case ADD_NEW_POST:
        state.postsData.push({id: v1(), userText: state.postText})
        state.postText = ''
        return state
      case CHANGE_POST_TEXT:
        state.postText = action.text
        return state
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