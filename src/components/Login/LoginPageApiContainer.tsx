import React, { useEffect } from 'react';
import LoginPage from './LoginPage';

import { LoginPageStoreType } from './LoginPageContainer';
type AuthAPIType = {
    setting: () => void
}
export type LoginPageCommonType = LoginPageStoreType & AuthAPIType

const LoginPageApiContainer = (props: LoginPageStoreType) => {
    
    const setting = () => { 
        props.getAuthUserData()
    } 

    useEffect(() => {
        props.getProfileUserData(Number(props.id))
    }, [props.id])

    return <LoginPage {...props} setting={setting}/>
};

export default LoginPageApiContainer;