import { useEffect } from "react";

import Header from "./Header";

import { AuthStoreType } from "./HeaderContainer";

type AuthApiType = {
    setting: () => void
}
export type HeaderCommonType = AuthStoreType & AuthApiType

const HeaderApiContainer: React.FC<AuthStoreType> = (props) => {

    const setting = () => { 
        props.getAuthUserData()
    } 

    useEffect(() => {
        props.getProfileUserData(props.id)
    }, [props.id])

    return (
        <Header {...props} setting={setting}/>
    );
};

export default HeaderApiContainer;