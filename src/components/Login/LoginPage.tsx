import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getAuthUserDataTC, getProfileUserDataTC } from '../../redux/reducers/authReducer';

import {LoginFromContainer} from './LoginForm/LoginFormContaienr';

export const LoginPage: React.FC = () => {

    const id = useAppSelector(state => state.auth.id)
    const dispatch = useAppDispatch()

    const setting = () => {
        dispatch(getAuthUserDataTC())
    }

    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    useEffect(() => {
        dispatch(getProfileUserDataTC(id))
    }, [])

    return (
        <div>
            <LoginFromContainer onSubmit={onSubmit}/> 
            <button onClick={setting}>Login</button>
        </div>
    );
};