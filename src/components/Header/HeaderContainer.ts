import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getAuthUserDataTC, getProfileUserDataTC, setAuthUserDataAC, setProfileUserDataAC } from "../../redux/reducers/authReducer";
import { RootStateType } from "../../redux/store";

import HeaderApiContainer from "./HeaderApiContainer";

type mapStateToPropsType = {
    id: number
    login: string | null 
    email: string | null
    photo: string 
    status: string | null
    isAuth: boolean
    isFetching: boolean
}
type mapDispatchToPropsType = {
    getAuthUserData: () => void
    getProfileUserData: (id: number) => void
}
export type AuthStoreType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    const {id, login, email, isFetching, isAuth, photo, status} = state.auth
    return {
        id,
        login,
        email,
        status,
        photo,
        isAuth,
        isFetching,
    }
}

const mapDispatchToProps = {
    getAuthUserData: getAuthUserDataTC,
    getProfileUserData: getProfileUserDataTC
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderApiContainer)