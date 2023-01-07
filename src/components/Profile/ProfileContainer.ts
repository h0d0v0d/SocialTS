import { connect } from 'react-redux';
import { compose } from 'redux';

import ProfileApiContainer from './ProfileApiContainer';

import { actions, UserDataType, PostItemType, getProfileUserDataTc } from '../../redux/reducers/profileReducer';

import {RootStateType} from '../../redux/store'
import withRedirect from '../HOC/withRedirect';

const {addPostAC, changePostTextAC, setPostsAC} = actions

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
    const {userData, postsData, postText, changedStatus} = state.profilePage
    return {
        userData,
        postsData,
        postText,
        changedStatus
    } 
}

const mapDispatchToProps = {
    setPosts: setPostsAC,
    onChangeInput: changePostTextAC,
    addNewPost: addPostAC,
    getProfileUserData: getProfileUserDataTc,
    toogleChangedStatus: actions.toogleChangedStatusAC
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRedirect)
    (ProfileApiContainer);