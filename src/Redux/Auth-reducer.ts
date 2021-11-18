
export type AuthType = {
    userId:number | null
    email: string | null
    login: string | null
    isAuth:boolean
}

let initialState:AuthType = {
    userId:null,
    email: null,
    login: null,
    isAuth:false
}

function AuthReducer(state = initialState, action:GlobalType) {
        switch (action.type) {
            case "SET-USER-DATA":
                return {
                    ...state,
                   ...action.data,
                    isAuth:true
                }
            default: return state
        }
}

type GlobalType = setUserDataType

type setUserDataType = ReturnType<typeof setUserData>

export const setUserData = (userId:number, email:string,login:string) => {
    return {
        type:"SET-USER-DATA",
        data: {
            userId,
            email,
            login
        }
    } as const
}

export default AuthReducer