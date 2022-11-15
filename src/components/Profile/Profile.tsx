import PostItem from '../PostItem/PostItem';

import './profile.css'

const Profile = () => {
    return (
        <div className='profile' >
            <img src="" alt="photo" />
            <h2>Description</h2>
            --
            --
            <h2>New post</h2>
            <input type="text" />
            <button>Add post</button>
            <h2>Posts</h2>
            <div className='post-list' >
                <PostItem/>
                <PostItem/>
            </div>
        </div>
    );
};

export default Profile;