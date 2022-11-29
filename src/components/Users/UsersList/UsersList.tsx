import { UserItemType } from '../../../redux/reducers/usersReducer';

import './usersList.css'

type UsersListPropsType = {
    usersData: Array<UserItemType>
    onFollowOrUnfollowHandler: (id: string, isFollow: boolean) => void
}

const UsersList: React.FC<UsersListPropsType>= (props) => {
    return (
        <div className="users-list">
            {
                props.usersData.map((u) => {

                    const buttonName = u.isFollow ? 'Unfollow' : 'Follow'
                    const buttonClass = `follow-button ${u.isFollow ? 'isFollow' : ''}`

                    const onFollowOrUnfollowHandler = () => {
                        props.onFollowOrUnfollowHandler(u.userId, !u.isFollow)
                    }
                
                    return (
                        <div className="users-list-item" key={u.userId}>
                            <div className="users-list-item-description">
                                <img src={u.png} style={{width: '80px', height: '80px', borderRadius: '50%'}}alt="" />
                                <div className="name-and-status">
                                    <p><b>Name: </b>{u.name}</p>
                                    <p><b>Status: </b>{u.status}</p>
                                </div>
                            </div>
                            <div className="country-and-follow-button">
                                <p>{u.location.city}</p>
                                <button onClick={onFollowOrUnfollowHandler} className={buttonClass}>{buttonName}</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default UsersList;