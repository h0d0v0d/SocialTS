import { v1 } from "uuid"

import postReducer from "./reducers/profileReducer"
import messageReducer from "./reducers/messagesReducer"

const png: string = 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'

export type UserType = {
  png: string
}
export type PostItemType = {
  id: string, 
  userText: string,
}
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
export type ProfilePageType = {
  postsData: Array<PostItemType>, 
  postText: string
}
export type MessagesPageType = {
  messagesData: Array<MessagesDataItemType>, 
  newMessageText:string
}
export type DataType = {
  user: UserType
  profilePage: ProfilePageType
  messagesPage: MessagesPageType
} 
export type ActionTypeE = {
  type: string
  text: string 
  id: string
  friendID: string
} 

export type ActionType = any

export type StoreType = {
  _state: DataType,
  getState: any
  dispatch: (action: any) => void,
  subscribe: (f: any) => void,
  render: () => void
}


 
const store: StoreType = {
  _state: {
    user: {
      png: 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'
    },
    profilePage: {
      postsData: [
        {id: v1(), userText: 'Это мой первый пост'},
        {id: v1(), userText: 'Это мой второй пост'},
      ],
      postText: '',
    },
    messagesPage: {
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
  },
  getState: function() {
    return this._state
  },
  dispatch: function(action: ActionType) {

    this._state.profilePage = postReducer(this._state.profilePage, action)
    this._state.messagesPage = messageReducer(this._state.messagesPage, action)

    console.log('dispatch')
    this.render()
  },
  subscribe: function(observer) {
    this.render = observer
  },
  render: function() {
    console.log('render')
  },
}

export default store






