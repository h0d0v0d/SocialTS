import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setAuthUserDataAC, setProfileUserDataAC } from "../../redux/reducers/authReducer";
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
    setUserData: (id: number, email: string, login: string) => void
    setProfileUserData: (status: string, photo: string) => void
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

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        setUserData: function(id: number, email: string, login: string) {
            dispatch(setAuthUserDataAC(id, email, login))
        },
        setProfileUserData: function(status: string, photo: string) {
            dispatch(setProfileUserDataAC(status, photo))
        }
    }
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderApiContainer)