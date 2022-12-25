import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Profile from './Profile';

import { ProfileStoreType } from './ProfileContainer';

type ProfileApiType = {

}
export type ProfileCommonType = ProfileStoreType & ProfileApiType

const ProfileApiContainer: React.FC<ProfileStoreType> = (props) => {
    const params = useParams()
    const location = useLocation()
    

    useEffect(() => {
        let id = location.pathname === '/' ? 26914 : params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
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