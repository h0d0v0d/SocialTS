import { PostItemType } from '../../../redux/reducers/profileReducer'

import './postItem.css'

type PostItemPropsType = {
    itemPostData: PostItemType 
}

const PostItem: React.FC<PostItemPropsType> = ({
    itemPostData
}) => {

    const png: string = 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'

    return (
        <div className='post-item' >
            <img src={png} alt="user-photo" className='post-item-img'/>
            <h2>{itemPostData.userText}</h2>
            <button className='profile-button like'>Like</button>
            <button className='profile-button dislike'>Dislike</button>
            <button className='profile-button repost'>Repost</button>
        </div>
    );
};

export default PostItem;