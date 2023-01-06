import React, { useEffect } from 'react';

import Users from './Users'

import { UsersStoreType } from './UsersContainer';

type UsersApiType = {
    onFollowOrUnfollowHandler: (userId: number, isFollow: boolean) => void
}
export type UsersCommonType = UsersStoreType & UsersApiType

const UsersApiContainer = (props: UsersStoreType) => {

    const getData = () => {
        props.getUsers(props.currentPage)
    }

    const onFollowOrUnfollowHandler = (userId: number, isFollow: boolean) => { 
        props.onFollowOrUnfollow(userId, isFollow)
    }

    useEffect(() => {
        getData()
    }, [props.currentPage])

    return (
        <Users {...props} onFollowOrUnfollowHandler={onFollowOrUnfollowHandler}/>
    );
};

export default UsersApiContainer;