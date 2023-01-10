import React, { useEffect } from 'react';

import Users from './Users'

import { UsersStoreType } from './UsersContainer';

type UsersApiType = {}
export type UsersCommonType = UsersStoreType & UsersApiType

const UsersApiContainer: React.FC<UsersStoreType> = (props) => {

    const getData = () => {
        props.getUsers(props.currentPage)
    }

    useEffect(() => {
        getData() 
    }, [props.currentPage])

    return (
        <Users {...props}/>
    );
};

export default UsersApiContainer;