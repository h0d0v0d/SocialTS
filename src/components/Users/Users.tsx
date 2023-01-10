import { UsersCommonType } from './UsersApiContainer';

import UsersList from './UsersList/UsersList';

import Loading from '../../resoursec/icons/Loading';
import './users.css'

const Users: React.FC<UsersCommonType> = ({
    usersData,
    totalUsersCount,
    pageSize,
    currentPage,
    isFetchingFollowingUsers,
    isFetching,
    setCurrentPage,
    onFollowOrUnfollow
}) => {

    const onFollowOrUnfollowHandler = (userId: number, isFollow: boolean) => {
        onFollowOrUnfollow(userId, isFollow)
    }

    const calculatePages = () => {
        let pages = []
        for (let i = 1; i <= Math.ceil(totalUsersCount / pageSize); i++) {
            pages.push(i)
        }
        return pages.filter(el => currentPage - el > 3 ? false : el - currentPage < 4 ? true : false)
        .map((el, i) => {
            return (
                <span key={i} 
                    onClick={() => {setCurrentPage(el)}}
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
};

export default Users;