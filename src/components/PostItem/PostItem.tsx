import './postItem.css'

const PostItem = () => {
    return (
        <div className='post-item' >
            <img src="" alt="user-photo" />
            <h4>User text</h4>
            <button>Like</button>
            <button>Dislike</button>
            <button>Repost</button>
        </div>
    );
};

export default PostItem;