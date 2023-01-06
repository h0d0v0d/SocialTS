import { useEffect } from "react";

import Header from "./Header";

import { AuthStoreType } from "./HeaderContainer";
import { authAPI, getProfileUserData } from "../../api/api";

const png: string = 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'

type AuthApiType = {
    setting: () => void
}
export type HeaderCommonType = AuthStoreType & AuthApiType

const HeaderApiContainer: React.FC<AuthStoreType> = (props) => {

    const setting = () => {
        authAPI()
        .then((data) => {
            const {id, email, login} = data
            props.setUserData(id, email, login)
        })
    }

    useEffect(() => {
        getProfileUserData(props.id)
        .then((res) => {
            const resData = {aboutMe: 'Это блять мой статус', photo: png}
            props.setProfileUserData(resData.aboutMe, resData.photo)
        })
    }, [props.id])

    return (
        <Header {...props} setting={setting}/>
    );
};

export default HeaderApiContainer;