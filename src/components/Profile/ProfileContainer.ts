import { connect } from 'react-redux';
import { compose } from 'redux';

import ProfileApiContainer from './ProfileApiContainer';

import { actions, getProfileUserData, changeStatus} from '../../redux/reducers/profileReducer';

import {RootStateType} from '../../redux/store'
import withRedirect from '../HOC/withRedirect';

const {addPost, changePostText, setPosts} = actions

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = typeof mapDispatchToProps
export type ProfileStoreType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType) => { 
    const {userData, userStatus, postsData, postText} = state.profilePage
    return {
        id: state.auth.id,
        userData,
        userStatus,
        postsData,
        postText,
    } 
}

const mapDispatchToProps = {
    setPosts,
    changePostText, 
    addPost,
    getProfileUserData,
    changeStatus
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRedirect)
    (ProfileApiContainer);