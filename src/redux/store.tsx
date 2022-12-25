import { createStore, combineReducers } from "redux";

import profileReducer from './reducers/profileReducer'
import messagesReducer from './reducers/messagesReducer'
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";

export type ActionType = any

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type RootStateType = ReturnType<typeof reducers>

const reduxStore = createStore(reducers)

export default reduxStore 
