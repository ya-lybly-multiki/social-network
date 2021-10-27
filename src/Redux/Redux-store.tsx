
import {combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-reduser";
import DialogsReducer from "./Dialogs-reduser";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogsReducer
})


let store = createStore(reducers)

export default store