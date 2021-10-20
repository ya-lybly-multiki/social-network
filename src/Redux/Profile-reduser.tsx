
import {
  ActionTypes,
  PostType,
  ProfilePageType,
} from "./State";

type PropsType = {
   state:ProfilePageType
  action:ActionTypes

}


const ProfileReducer = (state:ProfilePageType, action:ActionTypes) => {

    switch (action.type) {
      case "ADD-POST":
        const newPost: PostType = {
          id: 5,
          message: action.postText,
          likeCounts: 0
        };
        state.posts.push(newPost)
        return state
      case "CHANGE-NEW-TEXT":
        state.messageForNewPost = action.newText
        return state
      default: return state
    }
}

export const addPostAc = (postText:string) => {
  return {
    type: "ADD-POST",
    postText:postText
  } as const
}

export const changeNewText = (newText:string) => {
  return {
    type: "CHANGE-NEW-TEXT",
    newText:newText
  } as const
}

export default ProfileReducer