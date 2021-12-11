import {Dispatch} from "redux";
import {profileAPI} from "../Api/ApiJs";


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
    posts: postType[]
    profile:ProfileType | null
    userStatus:string
}



let initialState :ProfilePageType  = {
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
            const textPost = action.text
            const newPost: postType = {
                id: Math.random() * 100,
                message: textPost,
                likeCounts: 0,
            };
            return {
                ...state,
            posts:[...state.posts,{...newPost}]
            };
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
        case "UPDATE-NEW-STATUS": {
            return  {
                ...state,
                userStatus:action.userStatus
            }
        }
        default:return state
    }
}

export type addPostACType = ReturnType<typeof addPostAC>

export type setUserProfileType = ReturnType<typeof setUserProfile>

export type getUserStatusType = ReturnType<typeof getUserStatus>

export type updateNewStatusType = ReturnType<typeof updateNewStatus>

export type TsarType = addPostACType
    | setUserProfileType
    | getUserStatusType
    | updateNewStatusType

export const addPostAC = (text:string) => {
    return {
        type: "ADD-POST",
        text
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

export const updateNewStatus = (userStatus:string) => {
   return {
       type:"UPDATE-NEW-STATUS",
       userStatus
   } as const
}


export const getStatus = (userId:string) => {
    return (dispatch:Dispatch<TsarType>) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(getUserStatus(data))
            })
    }
}

export const getUserProfile = (userId:string) => {
    return (dispatch: Dispatch<TsarType>) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const updateUserStatus = (userStatus:string) => {
    return (dispatch:Dispatch<TsarType>) => {
        profileAPI.updateUserStatus(userStatus).then(data => {
            if(data.data.resultCode === 0) {
                dispatch(updateNewStatus(userStatus))
            }
        })
    }
}

export default ProfileReducer