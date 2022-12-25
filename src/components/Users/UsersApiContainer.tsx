import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Users from './Users'

import { UsersStoreType } from './UsersContainer';

type UsersApiType = {
    profFunc: () => void
}
export type UsersCommonType = UsersStoreType & UsersApiType

const UsersApiContainer = (props: UsersStoreType) => {

    const getData = () => {
        // пояснение к работе апи, в общем есть база всех юхеров просто большой файл однтипных объектов
        // когда мы посылаем гет запрос на сервер с определенными характеристиками сервер берет и разделяют базу 
        // на страницы зная count, он просто делит и разделяет насколько я понимаю 
        props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
        .then((res) => {
            setTimeout(() => {
                props.setTotalUsersCount(res.data.totalCount)
                props.setUsers(res.data.items)
                props.toogleIsFetching(false)
            }, 500)
        })
        .catch((e) => {
            alert('Какая то ебанная ошибка не серваке')
        })
    }

    useEffect(() => {
        getData()
    }, [props.currentPage])

    const profFunc = () => {
        console.log('Guess who')
    }

    return (
        <Users {...props} profFunc={profFunc}/>
    );
};

export default UsersApiContainer;