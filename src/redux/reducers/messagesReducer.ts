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
        name: 'Владимир Владимирович', 
        message: [
          {id: v1(), status: 1, src: png, messageText: 'Добрый день, когда новые поправки?'}, 
          {id: v1(), status: 0, src: png, messageText: 'Зравствуйте, скоро.'},
          {id: v1(), status: 1, src: png, messageText: 'Хорошо, жду.'}
        ]
      },
      {
        id: v1(), 
        name: 'Вова', 
        message: [
          {id: v1(), status: 1, src: png, messageText: 'Привет, все в силе?'}, 
          {id: v1(), status: 0, src: png, messageText: 'Привет, да, я готов, ты?'},
          {id: v1(), status: 1, src: png, messageText: 'На 100%'}, 
        ]
      },
      {
        id: v1(), 
        name: 'Сладости Минск', 
        message: [
          {id: v1(), status: 1, src: png, messageText: 'Здравствуйте, я по поводу конфет из штатов.'}, 
          {id: v1(), status: 0, src: png, messageText: '53.957870, 27.560187'}
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
            return { ...state, newMessageText: action.text } 
        default: 
            return state
    }    
}
 
export default messagesReducer

export const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT'
export const SEND_MESSAGE = 'SEND_MESSAGE'

export const changeMessageTextActionCreator = (text: string) => {return {type: CHANGE_NEW_MESSAGE_TEXT, text: text}}
export const sendMessageActionCreator = (id: string) => {return {type: SEND_MESSAGE, id: id}}












