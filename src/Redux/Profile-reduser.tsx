import {Dispatch} from "redux";
import {usersAPI} from "../Api/ApiJs";


export type postType = {
    id:number
    message:string
    likeCounts:number
}





export type ProfileType = {
    aboutMe: null | string
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        "youtube": null | string
        github: null | string
        mainLink: null | string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    "fullName": null | string
    "userId": number
    "photos": {
        "small": string
        "large": string
    }
}

export type ProfilePageType = {
    messageForNewPost:string
    posts: postType[]
    profile:ProfileType | null
    userStatus:string
}



let initialState :ProfilePageType  = {
        messageForNewPost: "",
        posts: [
            {id: 1, message: "hello everybody", likeCounts: 12},
            {id: 2, message: "its my first post", likeCounts: 13}
        ],
        profile:  null,
        userStatus: ""
    }

const ProfileReducer = (state = initialState, action: TsarType): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: postType = {
                id: Math.random() * 100,
                message: state.messageForNewPost,
                likeCounts: 0
            };
            return {
                ...state,
            posts:[...state.posts,{...newPost}]
            };
        case "CHANGE-NEW-TEXT":
            return {
                ...state,
                messageForNewPost:action.newText
            }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile:action.newProfile
            }
        }
        case "GET-USER-STATUS": {
            return {
                ...state,
                userStatus:action.userId
            }
        }
        default:return state
    }
}

export type addPostACType = ReturnType<typeof addPostAC>

export type changeNewTextACType = ReturnType<typeof changeNewTextAC>

export type setUserProfileType = ReturnType<typeof setUserProfile>

export type getUserStatusType = ReturnType<typeof getUserStatus>

export type TsarType = addPostACType
    | changeNewTextACType
    | setUserProfileType
    | getUserStatusType


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

export const setUserProfile = (newProfile:ProfileType  ) => {
  return {
      type:"SET-USER-PROFILE",
       newProfile
  } as const
}

export const getUserStatus = (userId:string) => {
    return {
        type:"GET-USER-STATUS",
        userId
    } as const
}


export const getStatus = (userId:string) => {
    return (dispatch:Dispatch<TsarType>) => {
        usersAPI.getStatus(userId)
            .then(data => {
                dispatch(getUserStatus(data))
            })
    }
}

export const getUserProfile = (userId:string) => {
    return (dispatch: Dispatch<TsarType>) => {
        usersAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export default ProfileReducer