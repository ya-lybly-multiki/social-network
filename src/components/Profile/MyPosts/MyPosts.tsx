import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import Posts from "./Post/Posts";
import { PostType} from "../../../Redux/Store";


type PropsType = {
    posts: Array<PostType>
    addPost: () => void
    message: string
    changeNewTextCallback:(newText: string) => void
}




function MyPosts(props: PropsType) {

    const postArray = props.posts.map((p) =>
        <Posts message={p.message} likeCounts={p.likeCounts}/>)

    const OnAddPost = () => props.addPost()


    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let current = e.currentTarget.value
            props.changeNewTextCallback(current)
        console.log(current)
    }

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <textarea value={props.message}
                      onChange={ changeHandler}/>
            <button onClick={OnAddPost}>Add post</button>
            {postArray}
        </div>
    )
}

export default MyPosts;