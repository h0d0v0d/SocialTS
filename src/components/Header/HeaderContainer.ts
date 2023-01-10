import { connect } from "react-redux";

import { RootStateType } from "../../redux/store";

import HeaderApiContainer from "./HeaderApiContainer";

type mapStateToPropsType = {
    id: number | null
    login: string | null 
    email: string | null
    photo: string 
    status: string | null
    isAuth: boolean
    isFetching: boolean
}
type mapDispatchToPropsType = {}

export type HeaderStoreType = mapStateToPropsType & mapDispatchToPropsType

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

const mapDispatchToProps = {}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderApiContainer)