import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route,} from "react-router-dom";
import news from "./components/News/News";
import music from "./components/Music/Music";
import settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { StoreType} from "./Redux/State";
import Sidebar from "./components/Sidebar/Sidebar";

type PropsType = {
    store: StoreType

}


const App: React.FC<PropsType> = (props) => {

    const state = props.store.getState()



    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <Header/>
                <Navbar state={props.store._state.sideBar}/>
                <div className='app__wrapper_content'>
                    <Route path='/dialogs' render={() => <Dialogs 
                        dispatch={props.store.dispatch.bind(props.store)}
                        state={state.messagesPage}/>}/>
                    <Route path='/profile'
                           render={() => <Profile state={state.profilePage}
                                                  dispatch ={props.store.dispatch.bind(props.store)}
                                                addPost={props.store.addPost.bind(props.store)}
                                                  changeNewText={props.store.changeNewText.bind(props.store)}

                           />}/>
                    <Route path='/news' component={news}/>
                    <Route path='/music' component={music}/>
                    <Route path='/settings' component={settings}/>
                    <Route path='/Friends' component={Friends}/>
                    <Route path='/Sidebar' component={Sidebar}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
