import React from "react";
import MyPosts from "./MyPosts";
import {ActionTypes, PostType} from "../../../Redux/Store";
import {addPostAC,  changeNewTextAC} from "../../../Redux/Profile-reduser";


type PropsType = {
    posts: Array<PostType>
    message: string
    dispatch : (action: ActionTypes) => void
}

export const MyPostsContainer: React.FC<PropsType> = ({posts, ...props}) => {

    const addPost = () => {

        props.dispatch(addPostAC())
     }
    const updateNewPostText = (text: string) => {
        props.dispatch(changeNewTextAC(text))
    }

    return (<MyPosts posts={posts}
                 message={props.message}
                 changeNewTextCallback={updateNewPostText}
                 addPost={addPost}
        />
    )
}