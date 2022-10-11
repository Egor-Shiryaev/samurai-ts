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

          <Post />
          <Post />
          <Post />

        </div>
    </div>

};

export default MyPosts;