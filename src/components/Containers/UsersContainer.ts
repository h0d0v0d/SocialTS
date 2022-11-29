import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Users from '../Users/Users';

import { setUsersActionCreator, followActionCreator, unfFollowActionCreator  } from '../../redux/reducers/usersReducer';

import { RootStateType} from '../../redux/store';
import {UserItemType} from '../../redux/reducers/usersReducer'


type MapStateToPropsType = {
    usersData: Array<UserItemType>
}
type MapDispatchToPropsType = {
    setUsers: (users: Array<UserItemType>) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
} 

export type UsersCommonType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType) => {
    return {
        usersData: state.usersPage.usersData
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUsers: function (users: Array<UserItemType>) {
            dispatch(setUsersActionCreator(users))
        },
        follow: function (userId: string)  {
            dispatch(followActionCreator(userId))
        },
        unfollow: function (userId: string) {
            dispatch(unfFollowActionCreator(userId))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer