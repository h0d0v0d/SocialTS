import { createStore, combineReducers } from "redux";

import profileReducer from './reducers/profileReducer'
import messagesReducer from './reducers/messagesReducer'

let reducers = combineReducers({
    profileReducer,
    messagesReducer,
})

let reduxStore = createStore(reducers)

export default reduxStore