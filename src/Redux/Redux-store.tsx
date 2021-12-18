import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-reduser";
import DialogsReducer from "./Dialogs-reduser";
import UsersReducer from "./Users-reducer";
import AuthReducer from "./Auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./AppReducer";

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app:appReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store