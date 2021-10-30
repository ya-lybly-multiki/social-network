
import {combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-reduser";
import DialogsReducer from "./Dialogs-reduser";


let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogsReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store