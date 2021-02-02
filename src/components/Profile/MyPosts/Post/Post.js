import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src={props.src}></img>
            {props.title}
        </div>
    );
}

export default Post;