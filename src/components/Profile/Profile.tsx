import PostItem from '../PostItem/PostItem';
import { PostItemType, UserType } from '../../redux/store';

import { addPostActionCreator, changePostTextActionCreator } from '../../redux/reducers/profileReducer';

import './profile.css'

type ProfilePropsType = {
    user: UserType
    postData: Array<PostItemType>,
    postText: string
    dispatch: (a: any) => void
}

const Profile = (props: ProfilePropsType) => {

    const changeInput = (newText: string) => {
        props.dispatch(changePostTextActionCreator(newText))
    }

    const addNewPost = () => {
        props.dispatch(addPostActionCreator())
    }

    return (
        <div className='profile' >
            <img src={props.user.png} alt="user" className='profile-img'/>
            <h2 className='name'>Yahor Sera</h2>
            <h5 className='status' >Cтатус: Дорогой дневник....</h5>
            <h3 className='new-post-titile'>New post</h3>
            <input className='new-post-input' type="text" value={props.postText} onChange={(e) => {changeInput(e.currentTarget.value)}}/>
            <button className='profile-button' onClick={addNewPost}>Add post</button>
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