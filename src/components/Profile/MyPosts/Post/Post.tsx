import React from 'react';
import s from './Post.module.css'

type PostMessageType =  {
    message: string
    numberOfLikes: number
}

const Post = (props: PostMessageType) => {
    return <>
        <div className={s.item}>
            {props.message}
        </div>

        <img className={s.avatar} src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg"
             alt=""/>
        <span>{props.numberOfLikes} like</span>
    </>

};

export default Post;