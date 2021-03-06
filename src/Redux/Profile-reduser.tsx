import {Dispatch} from "redux";
import {profileAPI} from "../Api/ApiJs";
import {setAppStatus} from "./App-reducer";
import {handleServerNetworkError} from "../utils/ErrorHandler";
import {BaseThunkType} from "./Redux-store";


export type postType = {
    id: number
    message: string
    likeCounts: number
}

type PhotoType = {
    "small": string
    "large": string
}

export type ContactsType = {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    "youtube": null | string
    github: null | string
    mainLink: null | string
}

export type ProfileType = {
    aboutMe: null | string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    "fullName": null | string
    "userId": number
    "photos": PhotoType
}

export type ProfilePageType = {
    posts: postType[]
    profile: ProfileType | null
    userStatus: string
}


let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "hello everybody", likeCounts: 12},
        {id: 2, message: "its my first post", likeCounts: 13}
    ],
    profile: null,
    userStatus: ""
}

export const ProfileReducer = (state = initialState, action: TsarType): ProfilePageType => {

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
                posts: [...state.posts, {...newPost}]
            };
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.newProfile
            }
        }
        case "GET-USER-STATUS": {
            return {
                ...state,
                userStatus: action.userId
            }
        }
        case "UPDATE-NEW-STATUS": {
            return {
                ...state,
                userStatus: action.userStatus
            }
        }
        case "DELETE-POST": {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        }
        case "SAVE-PHOTO": {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state
    }
}

export type addPostACType = ReturnType<typeof addPostAC>

export type setUserProfileType = ReturnType<typeof getUserProfile>

export type getUserStatusType = ReturnType<typeof getUserStatus>

export type updateNewStatusType = ReturnType<typeof updateNewStatus>

export type deletePostType = ReturnType<typeof deletePost>

export type savePhotoSuccessType = ReturnType<typeof savePhotoSuccess>

export type TsarType = addPostACType
    | setUserProfileType
    | getUserStatusType
    | updateNewStatusType
    | deletePostType
    | savePhotoSuccessType

export const addPostAC = (text: string) => {
    return {
        type: "ADD-POST",
        text
    } as const
}

export const getUserProfile = (newProfile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        newProfile
    } as const
}

export const getUserStatus = (userId: string) => {
    return {
        type: "GET-USER-STATUS",
        userId
    } as const
}

export const updateNewStatus = (userStatus: string) => {
    return {
        type: "UPDATE-NEW-STATUS",
        userStatus
    } as const
}

export const deletePost = (id: number) => {
    return {
        type: "DELETE-POST",
        id
    } as const
}

export const savePhotoSuccess = (photos: PhotoType) => {
    return {
        type: "SAVE-PHOTO",
        photos
    } as const
}

export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'))
    try {
        const response = await profileAPI.getStatus(userId);
        dispatch(getUserStatus(response.data));
        dispatch(setAppStatus('succeeded'))
    } catch (e) {
        handleServerNetworkError((e as Error), dispatch)
    }

}

export const getUserProfilePage = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'))
    try {
        const res = await profileAPI.getUserProfile(userId)
        dispatch(getUserProfile(res.data))
        dispatch(setAppStatus('succeeded'))
    } catch (e) {
        handleServerNetworkError((e as Error), dispatch)
    }
}

export const updateUserStatus = (userStatus: string) =>
    async (dispatch: Dispatch) => {
        const response = await profileAPI.updateUserStatus(userStatus);
        if (response.data.resultCode === 0) {
            dispatch(updateNewStatus(userStatus));
        }
    }

export const savePhoto = (file: File) =>
    async (dispatch: Dispatch) => {
        dispatch(setAppStatus('loading'))
        try {
            const data = await profileAPI.savePhoto(file)
            dispatch(savePhotoSuccess(data.data.photos))
            dispatch(setAppStatus('succeeded'))
        } catch (e) {
            handleServerNetworkError((e as Error), dispatch)
        }
    }

export const saveProfile = (profile: ProfileType):ThunkType =>
    async (dispatch:Dispatch,getState ) => {
        const userId = getState().auth.userId
        dispatch(setAppStatus('loading'))
        try {
            const data = await profileAPI.saveProfile(profile)
            if (userId) getUserProfilePage(userId)
            dispatch(setAppStatus('succeeded'))
        }
        catch (e) {
            handleServerNetworkError((e as Error), dispatch)
        }
    }



type ThunkType = BaseThunkType<TsarType>

export default ProfileReducer