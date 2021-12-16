import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route,} from "react-router-dom";
import music from "./components/Music/Music";
import settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import News from "./components/News/News";
import Login from "./components/Login/Login";
import LoginForm from "./components/Login/LoginForm";
import LoginContainer from "./components/Login/LoginForm";






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
                    <Route path='/login'
                           render={() => <LoginContainer/>}/>
                    <Route path='/news' component={News}/>
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
