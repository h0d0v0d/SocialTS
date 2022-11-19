import { v1 } from "uuid"

import { MessagesPageType, ActionType, } from "../store"
import store from "../store"

const png: string = 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'

const initialState = {
    messagesData: [
      {
        id: v1(), 
        name: 'Friend 1', 
        message: [
          {id: v1(), status: 1, src: png, messageText: 'Привет'}, 
          {id: v1(), status: 0, src: png, messageText: 'Привет'}
        ]
      },
      {
        id: v1(), 
        name: 'Friend 2', 
        message: [
          {id: v1(), status: 1, src: png, messageText: 'Приветт'}, 
          {id: v1(), status: 0, src: png, messageText: 'Приветт'}
        ]
      },
      {
        id: v1(), 
        name: 'Friend 3', 
        message: [
          {id: v1(), status: 1, src: png, messageText: 'Приветтт'}, 
          {id: v1(), status: 0, src: png, messageText: 'Приветтт'}
        ]
      },
    ],
    newMessageText: ''
  }

function messagesReducer(state: MessagesPageType=initialState, action: ActionType) {
    switch(action.type) {
        case SEND_MESSAGE:
            state.messagesData.forEach((m) => {
                if (m.id === action.id) {
                    m.message.push({id: v1(), status: 1, src: png, messageText: state.newMessageText})
                }
            })
            state.newMessageText = ''
            return state
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text
            return state
        default: 
            return state
    }   
}
 
export default messagesReducer

export const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT'
export const SEND_MESSAGE = 'SEND_MESSAGE'

export function changeMessageTextActionCreator(text: string) {
  return {type: CHANGE_NEW_MESSAGE_TEXT, text: text}
}

export function sendMessageActionCreator(id: string) {
  return {type: SEND_MESSAGE, id: id}
}