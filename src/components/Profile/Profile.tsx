import PostItem from './PostItem/PostItem';

import { ProfileCommonType } from '../Containers/ProfileContainer';
import { PostItemType } from '../../redux/reducers/profileReducer'

import './profile.css'

const Profile: React.FC<ProfileCommonType> = (props) => {

    const png: string = 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'

    return (
        <div className='profile' >
            <img src={png} alt="user" className='profile-img'/>
            <h2 className='name'>Yahor Sera</h2>
            <h5 className='status' >Cтатус: Дорогой дневник....</h5>
            <h3 className='new-post-titile'>New post</h3>
            <input className='new-post-input' type="text" value={props.postText} onChange={props.onChangeInput}/>
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