import React, {ChangeEvent, useState} from "react";
import classes from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {ActionTypes, PostType} from "../../../Redux/State";

type PropsType = {
    posts: Array<PostType>
    addPost: (newPostElement: string) => void
    message: string
    changeNewTextCallback:(newText: string) => void
    dispatch : (action: ActionTypes) => void
}

function MyPosts(props: PropsType) {


    const postArray = props.posts.map((p) =>
        <Posts message={p.message} likeCounts={p.likeCounts}/>)

    const addPost = () => {
        props.dispatch({type: "ADD-POST", postText: props.message})
        // props.addPost(props.message)
    }

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type:"CHANGE-NEW-TEXT", newText:(e.currentTarget.value)})
        // props.changeNewTextCallback(e.currentTarget.value)
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

export default MyPosts;