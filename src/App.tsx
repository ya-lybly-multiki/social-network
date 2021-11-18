import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route,} from "react-router-dom";
import news from "./components/News/News";
import music from "./components/Music/Music";
import settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";






const App: React.FC = () => {

    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <HeaderContainer/>
                <Navbar />
                <div className='app__wrapper_content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer />}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
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
