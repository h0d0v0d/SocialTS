import PostItem from '../PostItem/PostItem';

import { PostItemType } from '../App/App';

import './profile.css'

type ProfilePropsType = {
    postData: Array<PostItemType>
}

export const png: string = 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'


const Profile = (props: ProfilePropsType) => {
    return (
        <div className='profile' >
            <img src={png} alt="photo" className='profile-img'/>
            <h2 className='name'>Yahor Sera</h2>
            <h5 className='status' >Cтатус: Дорогой дневник....</h5>
            <h3 className='new-post-titile'>New post</h3>
            <input className='new-post-input' type="text" />
            <button className='profile-button'>Add post</button>
            <div className='post-list' >
                {
                    props.postData.map((item) =>{
                        return <PostItem itemPostData={item} key={item.id}/>
                    })
                }
            </div>
        </div>
    );
};

export default Profile;