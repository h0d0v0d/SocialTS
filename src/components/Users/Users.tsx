import { UsersCommonType } from '../Containers/UsersApiContainer';

import UsersList from './UsersList/UsersList';

import Loading from '../../resoursec/icons/Loading';
import './users.css'

const Users: React.FC<UsersCommonType> = (props) => {

    const onFollowOrUnfollowHandler = (userId: number, isFollow: boolean) => { 
        return isFollow ? props.follow(userId) : props.unfollow(userId)
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
                            onFollowOrUnfollowHandler={onFollowOrUnfollowHandler}/>
                    <button onClick={props.profFunc}>Доказательство</button>
                </>
            }
            
        </div> 
    );
};

export default Users;