import {
    ActionTypes,
} from "./Store";


export type postType = {
    id:number
    message:string
    likeCounts:number
}

export type ProfilePageType = {
    messageForNewPost:string
    posts: Array<postType>
}


let initialState: ProfilePageType = {
        messageForNewPost: "",
        posts: [
            {id: 1, message: "hello everybody", likeCounts: 12},
            {id: 2, message: "its my first post", likeCounts: 13}
        ]
    }

const ProfileReducer = (state = initialState, action: ActionTypes): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: postType = {
                id: Math.random() * 100,
                message: state.messageForNewPost,
                likeCounts: 0
            };
            state.posts.push(newPost)
            return state
        case "CHANGE-NEW-TEXT":
            state.messageForNewPost = action.newText
            return state
        default:
            return state
    }
}




export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}

export default ProfileReducer