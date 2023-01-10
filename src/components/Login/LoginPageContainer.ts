import { connect } from "react-redux";
import { getAuthUserDataTC, getProfileUserDataTC } from "../../redux/reducers/authReducer";
import { RootStateType } from "../../redux/store";

import LoginPageApiContainer from "./LoginPageApiContainer";

type mapStateToPropsType = {
    id: number | null
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
export type LoginPageStoreType = mapStateToPropsType & mapDispatchToPropsType

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

export const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPageApiContainer)