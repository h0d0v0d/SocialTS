import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getProfileUserData } from '../../api/api';

import Profile from './Profile';

import { ProfileStoreType } from './ProfileContainer';

type ProfileApiType = {}
export type ProfileCommonType = ProfileStoreType & ProfileApiType

const ProfileApiContainer: React.FC<ProfileStoreType> = (props) => {

    const params = useParams()
    const location = useLocation()
    
    useEffect(() => {
        let id: number = location.pathname !== '/' ? Number(params.userId) : 26914
        getProfileUserData(id)
        .then((res) => {
            props.setUserData(res.data)
        })
    }, [location.key]) 

    return (
        <>
            <Profile {...props}/>
        </>
    );
};

export default ProfileApiContainer;