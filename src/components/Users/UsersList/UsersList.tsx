import { NavLink } from 'react-router-dom';
import { UserItemType } from '../../../redux/reducers/usersReducer';

import './usersList.css'

type UsersListPropsType = {
    usersData: Array<UserItemType>
    isFetchingFollowingUsers: number[] 
    onFollowOrUnfollowHandler: (id: number, isFollow: boolean) => void
}

const UsersList: React.FC<UsersListPropsType>= (props) => {

    const nullPng: string = 'https://pimmedia.egger.com/l/decor/U780_9/s/Detail/f/881x513/8803438100510'

    return (
        <div className="users-list">
            {
                props.usersData.map((u) => {
 
                    const buttonName = u.followed ? 'Unfollow' : 'Follow'
                    const buttonClass = `follow-button ${u.followed ? 'is-follow' : ''} ${props.isFetchingFollowingUsers.find(el => el === u.id) ? 'is-following-fetching' : ''}`
                    const buttonDisabled = props.isFetchingFollowingUsers.some(id => id === u.id)
                    const onFollowOrUnfollowHandler = () => {
                        props.onFollowOrUnfollowHandler(u.id, u.followed)
                    }
                
                    return (
                        <div className="users-list-item" key={u.id}>
                            <div className="users-list-item-description">
                                <NavLink to={`/users/${u.id}`} key={u.id} style={{textDecoration: 'none', color: 'black'}}>
                                    <img src={u.photos.small || nullPng} style={{width: '80px', height: '80px', borderRadius: '50%'}}alt="" />
                                </NavLink>
                                <div className="name-and-status">
                                    <p><b>Name: </b>{u.name}</p>
                                    <p><b>Status: </b>{u.status ||  'Статуса нет' }</p>
                                </div>
                            </div>
                            <div className="country-and-follow-button">
                                <p>{'Город'}</p>
                                <button onClick={onFollowOrUnfollowHandler} className={buttonClass} disabled={buttonDisabled}>{buttonName}</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default UsersList;