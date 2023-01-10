import { ChangeEvent } from 'react';

import PostItem from './PostItem/PostItem';
import ProfileStatus from './ProfileStatus/ProfileStatus';

import { PostItemType } from '../../redux/reducers/profileReducer'
import { ProfileCommonType } from './ProfileApiContainer';

import './profile.css'

const png: string = 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'

const Profile: React.FC<ProfileCommonType> = ({
    userData,
    userStatus,
    postText,
    postsData,
    changeStatus,
    changePostText,
    addPost
}) => {
    
    const changePostTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changePostText(e.currentTarget.value)
    }

    const src = userData.photos.small ? userData.photos.small : png

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
};

export default Profile;