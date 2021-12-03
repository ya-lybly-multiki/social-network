import {Dispatch} from "redux";
import {usersAPI} from "../Api/ApiJs";


export type postType = {
    id:number
    message:string
    likeCounts:number
}

type ContactsType = {
    facebook: string
    website: string | null
    vk: string
    twitter: string
    instagram: string
    youtube: null,
    github: string
    mainLink: null
}

export type ProfileType = {
    aboutMe: string
    "contacts": ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string | undefined
        large: string | undefined
    }
}

export type ProfilePageType = typeof initialState


let initialState = {
        messageForNewPost: "",
        posts: [
            {id: 1, message: "hello everybody", likeCounts: 12},
            {id: 2, message: "its my first post", likeCounts: 13}
        ],
        profile: {} as ProfileType | null,
        userStatus:" "
    }

const ProfileReducer = (state:ProfilePageType = initialState, action: TsarType): ProfilePageType => {

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
                profile:action.profile
            }
        }
        case "GET-USER-STATUS": {
            return {
                ...state,
                ...action.payload
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

export const setUserProfile = (profile:ProfileType | null ) => {
  return {
      type:"SET-USER-PROFILE",
      profile
  } as const
}

export const getUserStatus = (userId:string) => {
    return {
        type:"GET-USER-STATUS",
        payload:{userId}
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