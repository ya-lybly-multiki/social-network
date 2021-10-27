import React, {ChangeEvent, useState} from "react";
import classes from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {ActionTypes, PostType} from "../../../Redux/Store";
import {addPostAc, changeNewText} from "../../../Redux/Profile-reduser";

type PropsType = {
    posts: Array<PostType>
    addPost: (newPostElement: string) => void
    message: string
    changeNewTextCallback:(newText: string) => void
    dispatch : (action: ActionTypes) => void
}




function MyPostContainer(props: PropsType) {


    const postArray = props.posts.map((p) =>
        <Posts message={p.message} likeCounts={p.likeCounts}/>)

    const addPost = () => {
        props.dispatch(addPostAc(props.message))

    }

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewText(e.currentTarget.value))
    }

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <textarea value={props.message}
                      onChange={(e) => changeHandler(e)}/>
            <button onClick={addPost}>Add post</button>
            {postArray}
        </div>
    )
}

export default MyPostContainer;