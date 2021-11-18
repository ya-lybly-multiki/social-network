
import {combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-reduser";
import DialogsReducer from "./Dialogs-reduser";
import UsersReducer from "./Users-reducer";
import AuthReducer from "./Auth-reducer";


let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store