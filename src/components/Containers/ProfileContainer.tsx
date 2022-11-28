import { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Profile from '../Profile/Profile';

import { addPostActionCreator, changePostTextActionCreator } from '../../redux/reducers/profileReducer';

import {RootStateType} from '../../redux/store'
import {PostItemType} from '../../redux/reducers/profileReducer'

type MapStateToPropsType = {
    postsData: Array<PostItemType>
    postText: string
}
type MapDispatchToPropsType = {
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
    addNewPost: () => void
}

export type ProfileCommonType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType) => {
    return {
        postsData: state.profilePage.postsData,
        postText: state.profilePage.postText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChangeInput: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(changePostTextActionCreator(e.currentTarget.value))
        },
        addNewPost: () => {
            dispatch(addPostActionCreator())
        }
    }
} 

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;










/* const ProfileContainer: React.FC<ProfileContainerPropsType> = (props) => {

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.dispatch(changePostTextActionCreator(e.currentTarget.value))
    }

    const addNewPost = () => {
        props.dispatch(addPostActionCreator())
    }

    return (
        <Profile postsData={props.profilePageData.postsData}
                 postText={props.profilePageData.postText}
                 onChangeInput={onChangeInput} 
                 addNewPost={addNewPost}/>
    );
}; */
