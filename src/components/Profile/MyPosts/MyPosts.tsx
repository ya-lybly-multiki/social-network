import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {postType} from "../../../Redux/Profile-reduser";
import {Button} from "../../utils/Button/Button";



type PropsType = {
    posts: Array<postType>
    addPost: () => void
    messageForNewPost: string
    updateNewPostText:(newText: string) => void
}




function MyPosts(props: PropsType) {

    const postArray = props.posts.map((p) =>
        <Posts message={p.message} likeCounts={p.likeCounts}/>)

    const OnAddPost = () => props.addPost()


    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let current = e.currentTarget.value
            props.updateNewPostText(current)
    }



    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <textarea value={props.messageForNewPost}
                      onChange={ changeHandler}/>
            <Button callBack={OnAddPost}>{"ADD POST"}</Button>
            {postArray}
        </div>
    )
}

export default MyPosts;