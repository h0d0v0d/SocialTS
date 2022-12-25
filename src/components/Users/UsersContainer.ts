import { connect } from 'react-redux';

import UsersApiContainer from './UsersApiContainer';

import { setUsersAC, 
         followAC, 
         unfFollowAC, 
         setCurrentPageAC, 
         setTotalUsersCountAC, 
         toogleIsFetchingAC } from '../../redux/reducers/usersReducer';

import { RootStateType} from '../../redux/store';
import { UserItemType } from '../../redux/reducers/usersReducer'

type MapStateToPropsType = {
    usersData: Array<UserItemType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean 
}
type MapDispatchToPropsType = {
    setUsers: (users: Array<UserItemType>) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (newCurrentPage: number) => void
    setTotalUsersCount: (newTotalUsersCount: number) => void
    toogleIsFetching: (isFetching: boolean) => void
} 

export type UsersStoreType = MapStateToPropsType & MapDispatchToPropsType
 
const mapStateToProps = (state: RootStateType) => {
    const {usersData, pageSize, totalUsersCount, currentPage, isFetching} = state.usersPage
    return { 
        usersData,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching
    }
}

const mapDispatchToProps = {
    setUsers: setUsersAC, 
    follow: followAC,
    unfollow: unfFollowAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toogleIsFetching: toogleIsFetchingAC
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