import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-reduser";
import DialogsReducer from "./Dialogs-reduser";
import UsersReducer from "./Users-reducer";
import AuthReducer from "./Auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

import {navbarReducer} from "./Navbar-reducer";
import {appReducer} from "./App-reducer";

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app:appReducer,
    navigation: navbarReducer
})


export type AppStateType = ReturnType<typeof rootReducer>
export type BaseThunkType<A extends Action = Action,
    R = void> = ThunkAction<R, AppStateType, unknown, A>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store