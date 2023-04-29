import { ChangeEvent, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { PostItemType, changeStatusTC, getProfileUserDataTC, profileReducerActions } from '../../redux/reducers/profileReducer'
import { useAppDispatch, useAppSelector } from '../../redux/store';

import {PostItem} from './PostItem/PostItem';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import withRedirect from '../HOC/withRedirect';

import './profile.css'

export const Profile: React.FC = withRedirect(() => {

    const authId = useAppSelector(state => state.auth.id)
    const {userData, userStatus, postText, postsData} = useAppSelector(state => state.profilePage)
    const params = useParams()
    const location = useLocation()
    const dispatch = useAppDispatch()
    
    const changePostTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(profileReducerActions.changePostText(e.currentTarget.value))
    }

    const changeStatus = (status: string) => {
        dispatch(changeStatusTC(status))
    }

    const addPost = () => {
        dispatch(profileReducerActions.addPost())
    }
    
    useEffect(() => {
        let id: number = location.pathname !== '/' ? Number(params.userId) : authId
        dispatch(getProfileUserDataTC(id))
    }, [location.key]) 

    const src = userData.photos.small ? userData.photos.small : 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'

    const posts = postsData.map((item: PostItemType) =>{
        return <PostItem itemPostData={item} key={item.id}/>  
    })

    return ( 
        <div className='profile' >
            <img src={src} alt="user" className='profile-img'/>
            <div className="name">
                <h2>{userData.fullName}</h2>
            </div> 
            <ProfileStatus status={userStatus} callBack={changeStatus}/>
            <div className="new-post-titile"> 
                <h3>New post</h3> 
            </div>
            <input className='new-post-input' type="text" value={postText} onChange={changePostTextHandler}/>
            <button className='profile-button' onClick={addPost}>Add post</button> 
            <div className='post-list' >
                { posts }
            </div>
        </div>
    ); 
});

