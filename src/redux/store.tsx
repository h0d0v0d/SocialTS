import { v1 } from "uuid"

import postReducer from "./reducers/postReducers"

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
export type DataType = {
  user: UserType
  postData: Array<PostItemType>
  messagesData: Array<MessagesDataItemType>
}

export type ActionType = {
  type: string,
  text: string
}

export type StoreType = {
  _state: DataType,
  dispatch: (action: any) => void
  subscribe: (f: any) => void,
  rerender: () => void
}

const store: StoreType = {
  _state: {
    user: {
      png: 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'
    },
    postData: [
        {id: v1(), userText: 'Это мой первый пост'},
        {id: v1(), userText: 'Это мой второй пост'},
    ],
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
    ]
  },
  dispatch: function(action: ActionType) {
    postReducer(action, this._state)
    console.log('dispatch')
    this.rerender()
  },
  subscribe: function(observer) {
    this.rerender = observer
  },
  rerender: function() {
    console.log('render')
  },
}

export default store

