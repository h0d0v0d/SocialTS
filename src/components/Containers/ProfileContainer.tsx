import { connect } from 'react-redux';

import ProfileApiContainer from './ProfileApiContainer';

import { addPostAC, changePostTextAC, setPostsAC, setUserDataAC, UserDataType, PostItemType } from '../../redux/reducers/profileReducer';

import {RootStateType} from '../../redux/store'

type MapStateToPropsType = {
    userData: UserDataType
    postsData: Array<PostItemType>
    postText: string
}
type MapDispatchToPropsType = {
    setUserData: (userData: UserDataType) => void
    setPosts: (posts: Array<PostItemType>) => void
    onChangeInput: (text: string) => void
    addNewPost: () => void
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
    setUserData: setUserDataAC,
    setPosts: setPostsAC,
    onChangeInput: changePostTextAC,
    addNewPost: addPostAC
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileApiContainer)

export default ProfileContainer;