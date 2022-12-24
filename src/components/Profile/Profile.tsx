import PostItem from './PostItem/PostItem';

import { PostItemType } from '../../redux/reducers/profileReducer'
import { ProfileCommonType } from '../Containers/ProfileApiContainer';

import './profile.css'

const png: string = 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'

const Profile: React.FC<ProfileCommonType> = (props) => {
    return (
        <div className='profile' >
            <img src={props.userData.photos.small ? props.userData.photos.small : png} alt="user" className='profile-img'/>
            <h2 className='name'>{props.userData.fullName}</h2>
            <h5 className='status' >Cтатус: {props.userData.aboutMe || 'Статуса нет'}</h5>
            <h3 className='new-post-titile'>New post</h3>
            <input className='new-post-input' type="text" value={props.postText} onChange={(e) => {props.onChangeInput(e.currentTarget.value)}}/>
            <button className='profile-button' onClick={props.addNewPost}>Add post</button> 
            <div className='post-list' >
                {
                    props.postsData.map((item: PostItemType) =>{
                        return <PostItem itemPostData={item} key={item.id}/>
                    })
                }
            </div>
        </div>
    ); 
};

export default Profile;