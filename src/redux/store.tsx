import { createStore, combineReducers, applyMiddleware, AnyAction } from "redux";
import thunkMiddleware, { ThunkAction, ThunkDispatch }  from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

import profileReducer, { ProfileReducerActionType } from './reducers/profileReducer'
import messagesReducer, { messagesReducerActionType } from './reducers/messagesReducer'
import usersReducer, { UsersReducerActionType } from "./reducers/usersReducer";
import authReducer, { AuthReducerActionType } from "./reducers/authReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer, 
    auth: authReducer,
    form: formReducer
})


export type ActionType = UsersReducerActionType | AuthReducerActionType | messagesReducerActionType | ProfileReducerActionType
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, ActionType>
export type DispatchType = ThunkDispatch<RootStateType, any, AnyAction> 
export type RootStateType = ReturnType<typeof reducers>

export const useAppDispatch = useDispatch<DispatchType>
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store 

// @ts-ignore
window.store = store