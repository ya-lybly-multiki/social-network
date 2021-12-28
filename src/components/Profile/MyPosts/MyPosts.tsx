import React, {useState} from "react";
import classes from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {postType} from "../../../Redux/Profile-reduser";

import TextAreaForm from "../../utils/TextAreaForm/TextAreaForm";


type PropsType = {
    posts: Array<postType>
    addPost: (newMessage: string) => void
}

const MyPosts = React.memo((props: PropsType) => {

        const [title, setTitle] = useState("")

        const postArray = props.posts.map((p) =>
            <Posts message={p.message} likeCounts={p.likeCounts}/>)

        const OnAddPost = (newMessage: string) => {
            props.addPost(newMessage)
            setTitle("")
        }


        return (
            <div className={classes.posts}>
                <label>
                    <h3>My posts</h3>
                    <TextAreaForm Text={title} addText={OnAddPost}
                                  nameBtn={"Add post"}
                                  setTitle={setTitle}
                    />
                </label>

                {postArray}
            </div>
        )
    }
)
export default MyPosts;