import React from "react";
import classes from './Post.module.css'



type PropsType = {
    message: string
    likeCounts: number
}

function Posts (props:PropsType) {

    return (
        <div className={classes.item}>
            <img src='https://res.cloudinary.com/druw4nfh6/image/upload/w_320/v1/teenslang/r5rwf0eimj1dykumqwbp'/>
            <p>{props.message}</p>
            <div>
                <span>Like</span> {props.likeCounts}
            </div>
        </div>
    )
}

export default Posts;