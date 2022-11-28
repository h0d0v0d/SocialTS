import { v1 } from "uuid"

import {ActionType } from "../store"

const png: string = 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'

export type MessageItemType = {
  id: string
  status: number,
  src: string,
  messageText: string
}
export type MessagesDataItemType = {
  id: string,
  name: string,
  message: Array<MessageItemType>
}
export type MessagesPageType = {
  messagesData: Array<MessagesDataItemType>, 
  newMessageText:string
}

const initialState: MessagesPageType = {
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
        name: 'Друг 2', 
        message: [
          {id: v1(), status: 1, src: png, messageText: 'Привет, как дела'}, 
          {id: v1(), status: 0, src: png, messageText: 'Привет'}
        ]
      },
      {
        id: v1(), 
        name: 'Friend 3', 
        message: [
          {id: v1(), status: 1, src: png, messageText: 'А знал ли ты что...'}, 
          {id: v1(), status: 0, src: png, messageText: 'Знал.'}
        ]
      }, 
    ],
    newMessageText: ''
  }

function messagesReducer(state: MessagesPageType=initialState, action: ActionType) {
    switch(action.type) {
        case SEND_MESSAGE:
        const newMessage: MessageItemType = {id: v1(), status: 1, src: png, messageText: state.newMessageText}
        return {
          messagesData: state.messagesData.map(el => el.id === action.id ? {...el, message: [ ...el.message, newMessage ]} : el),
          newMessageText: ''
        }

        case CHANGE_NEW_MESSAGE_TEXT:
            const newState2 = {
              ...state,
              newMessageText: action.text
            } 
            return newState2
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












