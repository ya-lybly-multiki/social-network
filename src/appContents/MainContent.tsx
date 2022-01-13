import React from 'react';
import {Route} from "react-router-dom";
import {withSuspense} from "../hoc/withSuspence";
import UsersContainer from "../components/Users/UsersApi";
import LoginContainer from "../components/Login/LoginForm";
import News from "../components/News/News";
import music from "../components/Music/Music";
import settings from "../components/Settings/Settings";
import Friends from "../components/Friends/Friends";
import Sidebar from "../components/Sidebar/Sidebar";
import ProfileContainer from "../components/Profile/ProfileContainer";
import DialogsContainer from "../components/Dialogs/DialogsContainer";




const MainContent = () => {



    return (
       <>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>
                           }/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/login'
                           render={() => <LoginContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={music}/>
                <Route path='/settings' component={settings}/>
                <Route path='/Friends' component={Friends}/>
                <Route path='/Sidebar' component={Sidebar}/>
       </>
    );
};

export default MainContent;