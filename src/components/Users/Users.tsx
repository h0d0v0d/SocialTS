import { UsersCommonType } from '../Containers/UsersContainer';

import UsersList from './UsersList/UsersList';

import './users.css'
import { v1 } from 'uuid';
import { useEffect } from 'react';
import axios from 'axios';

const png: string = 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'

const users = [
    {
        userId: v1(),
        name: 'Alex',
        status: 'Hi i am Alex',
        location: {country: 'Belarus', city: 'Minsk'},
        png: png,
        isFollow: true,
    },
    {
        userId: v1(),
        name: 'Kira',
        status: 'Maybe we will meet yesteday:)',
        location: {country: 'Belarus', city: 'Grodno'},
        png: png,
        isFollow: false,
    },
    {
        userId: v1(),
        name: 'Igor',
        status: 'hello(',
        location: {country: 'Belarus', city: 'Penza'},
        png: png,
        isFollow: false,
    },
    {
        userId: v1(),
        name: 'Nika',
        status: 'I can all',
        location: {country: 'Belarus', city: 'Moscow'},
        png: png,
        isFollow: false,
    }
]

const Users: React.FC<UsersCommonType> = (props) => {

    const getData = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((res) => {console.log(res.data.items)})
        return users
    }

    const onFollowOrUnfollowHandler = (userId: string, isFollow: boolean) => {
        return isFollow ? props.follow(userId) : props.unfollow(userId)
    }

    useEffect(() => {
        props.setUsers(getData())
    }, [])

    return (
        <div className='users-page'>
            <div className="serch">
                SEARCH
            </div>
            <UsersList usersData={props.usersData}
                       onFollowOrUnfollowHandler={onFollowOrUnfollowHandler}/>
        </div>
    );
};

export default Users;