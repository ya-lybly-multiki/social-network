import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./Redux-store";
import {getAuthUserData} from "./Auth-reducer";

type InitialStateType = {
    initialized:boolean
}

let initialState:InitialStateType  = {
  initialized:true
}

function appReducer(state = initialState, action: ActionsType) {
    switch (action.type) {
        case "SET-INITIAL": {
            debugger
            return  {
                ...state,
                initialized:false
            }
        }
        default:
            return state
    }
}

const initializedSuccessAc = () => {
    return {
        type:"SET-INITIAL"
    } as const
}


export const initializeApp = (): ThunkType<ActionsType> =>
    async (dispatch) => {
    debugger
    dispatch(getAuthUserData())

        .then(res => {
        dispatch(initializedSuccessAc())
    })
}

type ActionsType = ReturnType<typeof initializedSuccessAc>

type ThunkType<A extends Action> = ThunkAction<Promise<void>, AppStateType, unknown, A>



export default appReducer;