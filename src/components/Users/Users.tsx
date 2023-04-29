import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setUsers, onFollowOrUnfollow, usersReducerActions } from '../../redux/reducers/usersReducer';

import UsersList from './UsersList/UsersList';
import Loading from '../../resoursec/icons/Loading';
import withRedirect from '../HOC/withRedirect';

import './users.css'

export const Users: React.FC = withRedirect(() => {

    const {usersData, totalUsersCount, pageSize, currentPage, isFetchingFollowingUsers, isFetching} = useAppSelector(state => state.usersPage)
    const dispatch = useAppDispatch()

    const onFollowOrUnfollowHandler = (userId: number, isFollow: boolean) => {
        dispatch(onFollowOrUnfollow(userId, isFollow))
    }

    const changeCurrentPage = (pageNumber: number) => {
        dispatch(usersReducerActions.setCurrentPage(pageNumber))
    }

    useEffect(() => {
        dispatch(setUsers(currentPage))
    }, [])

    const calculatePages = () => {
        let pages = []
        for (let i = 1; i <= Math.ceil(totalUsersCount / pageSize); i++) {
            pages.push(i)
        }
        return pages.filter(el => currentPage - el > 3 ? false : el - currentPage < 4 ? true : false)
        .map((el, i) => {
            return (
                <span key={i} 
                    onClick={() => {changeCurrentPage(el)}}
                    className={`${el === currentPage && 'current-page'}`}>{el}</span>
            )
        } )
    } 

    const pages = calculatePages()

    const content = isFetching ? 
        <Loading size={130}/> : 
        <UsersList usersData={usersData} 
                   onFollowOrUnfollowHandler={onFollowOrUnfollowHandler} 
                   isFetchingFollowingUsers={isFetchingFollowingUsers}/>

    return (
        <div className='users-page'>
            <div className="serch">
                SEARCH
            </div>
            {pages}
            {content}
        </div> 
    );
});