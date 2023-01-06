import { UsersCommonType } from './UsersApiContainer';

import UsersList from './UsersList/UsersList';
import { followAPI, unFollowAPI } from '../../api/api';

import Loading from '../../resoursec/icons/Loading';
import './users.css'

const Users: React.FC<UsersCommonType> = (props) => {

    const onFollowOrUnfollowHandler = (userId: number, isFollow: boolean) => { 
        props.toogleFollowingIsFetchingOn(userId)
        if (isFollow) {
            setTimeout(() => {
                unFollowAPI(userId)
                .then((data) => {
                    if (data.resultCode === 0) { 
                        props.unfollow(userId)
                        props.toogleFollowingIsFetchingOff(userId)
                    }
                })
            }, 1000)
        }
        if (!isFollow) {
            setTimeout(() => {
                followAPI(userId) 
                .then((data) => {
                    if (data.resultCode === 0) {
                        props.follow(userId)
                        props.toogleFollowingIsFetchingOff(userId)
                    }
                })
            }, 1000)
        }
    }
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i<=pagesCount; i++) {
        pages.push(i)
    }
    pages = pages.filter(el => props.currentPage - el > 3 ? false : el - props.currentPage < 4 ? true : false)

    return (
        <div className='users-page'>
            <div className="serch">
                SEARCH
            </div>
            {
                pages.map((el, i) => {
                    return (
                        <span key={i} 
                            onClick={() => {props.setCurrentPage(el)}}
                            className={`${el === props.currentPage && 'current-page'}`}>{el}</span>
                    )
                } )
            }
            {
                props.isFetching ? <Loading size={130}/> : 
                <>
                    <UsersList usersData={props.usersData}
                               onFollowOrUnfollowHandler={onFollowOrUnfollowHandler}
                               isFetchingFollowingUsers={props.isFetchingFollowingUsers}/>
                </>
            }
            
        </div> 
    );
};

export default Users;