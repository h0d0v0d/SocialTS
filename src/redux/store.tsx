import { createStore, combineReducers } from "redux";

import profileReducer from './reducers/profileReducer'
import messagesReducer from './reducers/messagesReducer'

export type ActionType = any

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
})

export type RootStateType = ReturnType<typeof reducers>

const reduxStore = createStore(reducers)

export default reduxStore
 
