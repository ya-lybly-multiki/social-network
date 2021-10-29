import React from "react";
import MyPosts from "./MyPosts";
import {addPostAC, changeNewTextAC} from "../../../Redux/Profile-reduser";
import StoreContext from "../../../StoreContext";


export const MyPostsContainer: React.FC = (props) => {


    return (<StoreContext.Consumer>
            {
                (store) => {
                    const addPost = () => store.dispatch(addPostAC())
                    const updateNewPostText = (text: string) => {
                        store.dispatch(changeNewTextAC(text))
                    }
                    return <MyPosts posts={store.getState().profilePage.posts}
                                    message={store.getState().profilePage.messageForNewPost}
                                    changeNewTextCallback={updateNewPostText}
                                    addPost={addPost}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}