import { useEffect } from "react";
import axios from "axios";

import Header from "./Header";

import { AuthStoreType } from "./HeaderContainer";

const png: string = 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'

type AuthApiType = {
    setting: () => void
}
export type HeaderCommonType = AuthStoreType &AuthApiType

const HeaderApiContainer: React.FC<AuthStoreType> = (props) => {

    useEffect(() => {
        
    }, [])

    const setting = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then((res) => {
            setTimeout(() => {
                const resData = {id: 26914, email: 'pixaretyiypop@gmail.com', login: 'sera' }
                props.setUserData(resData.id, resData.email, resData.login)
            }, 2000)
        })
    }

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${props.id}`, {withCredentials: true})
        .then((res) => {
            setTimeout(() => {
                const resData = {aboutMe: 'Это блять мой статус', photo: png}
                props.setProfileUserData(resData.aboutMe, resData.photo)
            }, 2000)
        })
    }, [props.id])

    return (
        <Header {...props} setting={setting}/>
    );
};

export default HeaderApiContainer;