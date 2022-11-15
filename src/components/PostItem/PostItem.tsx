import { PostItemType } from '../App/App';

import './postItem.css'

type PostItemPropsType = {
    itemPostData: PostItemType
}

const png: string = 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'

const PostItem = (props: PostItemPropsType) => {
    return (
        <div className='post-item' >
            <img src={png} alt="user-photo" className='post-item-img'/>
            <h2>{props.itemPostData.userText}</h2>
            <button className='profile-button'>Like</button>
            <button className='profile-button'>Dislike</button>
            <button className='profile-button'>Repost</button>
        </div>
    );
};

export default PostItem;