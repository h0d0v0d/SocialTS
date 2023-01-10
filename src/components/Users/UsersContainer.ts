import { connect } from 'react-redux';

import UsersApiContainer from './UsersApiContainer';

import { actions, getUsers, onFollowOrUnfollow } from '../../redux/reducers/usersReducer';

import { RootStateType} from '../../redux/store';

const {setCurrentPage} = actions

type MapDispatchToPropsType = {
    setCurrentPage: (newCurrentPage: number) => void
    getUsers: (currentPage: number) => void
    onFollowOrUnfollow: (userId: number, isFollow: boolean) => void
}   
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
export type UsersStoreType = MapStateToPropsType & MapDispatchToPropsType
 
const mapStateToProps = (state: RootStateType) => {
    const {usersData, pageSize, totalUsersCount, currentPage, isFetching, isFetchingFollowingUsers} = state.usersPage
    return { 
        usersData,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        isFetchingFollowingUsers
    } 
}

const mapDispatchToProps = {
    setCurrentPage,
    getUsers,
    onFollowOrUnfollow
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer)

export default UsersContainer



























/* const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUsers: function (users: Array<UserItemType>) {
            dispatch(setUsersActionCreator(users))
        },
        follow: function (userId: number)  {
            dispatch(followActionCreator(userId))
        },
        unfollow: function (userId: number) {
            dispatch(unfFollowActionCreator(userId))
        },
        setCurrentPage: function (newCurrentPage: number) {
            dispatch(setCurrentPageActionCreator(newCurrentPage))
        },
        setTotalUsersCount : function (newTotalUsersCount: number) {
            dispatch(setTotalUsersCountActionCreator(newTotalUsersCount))
        },
        toogleIsFetching: function(isFetching: boolean) {
            dispatch(toogleIsFetchingActionCreator(isFetching))
        }
    }
} */