import authReducer, { AuthType, actions } from "../redux/reducers/authReducer";

const {setAuthUserDataAC, setProfileUserDataAC} = actions

const initialState: AuthType = {
    id: 26914,
    login: '', 
    email: '',
    status: '',
    photo: '',
    isAuth: false,
    isFetching: false,
}

test('auth reducer set auth user data', () => {
    const newAuthId = 4665
    const newAuthEmail = 'dvkjndfvkjfng'
    const newAuthLogin = 'fgbfgbfgb'

    const res = authReducer(initialState, setAuthUserDataAC(newAuthId, newAuthEmail, newAuthLogin))

    expect(res.id).toBe(newAuthId)
    expect(res.email).toBe(newAuthEmail)
    expect(res.login).toBe(newAuthLogin)
    expect(res.isAuth).toBe(true)
})

test('auth reducer set profile user data', () => {
    const newStatus = 'new status'
    const newPhoto = 'kjdnv485hb4875h48b'

    const res = authReducer(initialState, setProfileUserDataAC(newStatus, newPhoto))

    expect(res.status).toBe(newStatus)
    expect(res.photo).toBe(newPhoto)
   
})