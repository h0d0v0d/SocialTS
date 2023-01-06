import React, { useEffect } from 'react';

import Users from './Users'

import { UsersStoreType } from './UsersContainer';
import { getUsersAPI } from '../../api/api';

type UsersApiType = {
}
export type UsersCommonType = UsersStoreType & UsersApiType

const UsersApiContainer = (props: UsersStoreType) => {

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