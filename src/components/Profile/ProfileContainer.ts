import { connect } from 'react-redux';

import ProfileApiContainer from './ProfileApiContainer';

import { addPostAC, changePostTextAC, setPostsAC, setUserDataAC, UserDataType, PostItemType, getProfileUserDataTc } from '../../redux/reducers/profileReducer';

import {RootStateType} from '../../redux/store'

type MapStateToPropsType = {
    userData: UserDataType
    postsData: Array<PostItemType>
    postText: string
}
type MapDispatchToPropsType = {
    setPosts: (posts: Array<PostItemType>) => void
    onChangeInput: (text: string) => void
    addNewPost: () => void
    getProfileUserData: (id: number) => void
}

export type ProfileStoreType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType) => { 
    const {userData, postsData, postText} = state.profilePage
    return {
        userData,
        postsData,
        postText
    } 
}

const mapDispatchToProps = {
    setPosts: setPostsAC,
    onChangeInput: changePostTextAC,
    addNewPost: addPostAC,
    getProfileUserData: getProfileUserDataTc
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileApiContainer)

export default ProfileContainer;