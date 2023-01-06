import { UsersCommonType } from './UsersApiContainer';

import UsersList from './UsersList/UsersList';

import Loading from '../../resoursec/icons/Loading';
import './users.css'

const Users: React.FC<UsersCommonType> = (props) => {

    const onFollowOrUnfollowHandler = (userId: number, isFollow: boolean) => {
        props.onFollowOrUnfollowHandler(userId, isFollow)
    }

    const calculatePages = () => {
        let pages = []
        for (let i = 1; i <= Math.ceil(props.totalUsersCount / props.pageSize); i++) {
            pages.push(i)
        }
        return pages.filter(el => props.currentPage - el > 3 ? false : el - props.currentPage < 4 ? true : false)
        .map((el, i) => {
            return (
                <span key={i} 
                    onClick={() => {props.setCurrentPage(el)}}
                    className={`${el === props.currentPage && 'current-page'}`}>{el}</span>
            )
        } )
    }

    const pages = calculatePages()

    const content = props.isFetching ? <Loading size={130}/> : <UsersList usersData={props.usersData} onFollowOrUnfollowHandler={onFollowOrUnfollowHandler} isFetchingFollowingUsers={props.isFetchingFollowingUsers}/>

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