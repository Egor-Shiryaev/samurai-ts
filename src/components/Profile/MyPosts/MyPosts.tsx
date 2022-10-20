import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
    return <div> My post
        <div>
            <textarea></textarea>
            <button>button</button>
            <button>button 2</button>
        </div>
        <div className={s.posts}>

            <Post message="Hi, how are you"
                  numberOfLikes={4}/>
            <Post message="It's my first post"
                  numberOfLikes={3}/>
        </div>
    </div>


};

export default MyPosts;