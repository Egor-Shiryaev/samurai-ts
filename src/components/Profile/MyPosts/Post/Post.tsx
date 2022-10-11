import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return <>
        <div className={s.item}>
            post 1
        </div>

        <img className={s.avatar} src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg"
             alt=""/>
        <span>like</span>
    </>

};

export default Post;