import React, {Component} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { HashRouter, Route, withRouter,} from "react-router-dom";
import music from "./components/Music/Music";
import settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersApi";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import News from "./components/News/News";
import LoginContainer from "./components/Login/LoginForm";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/AppReducer";
import store, {AppStateType} from "./Redux/Redux-store";
import Preloader from "./components/utils/preloader/Preloader";






type MapDispatchToPropsType = {
    getSetUserData: () => void
}

type MapStateToPropsType = {
    initialized:boolean
}

class App extends Component<MapDispatchToPropsType & MapStateToPropsType> {


    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

                <div className="app__wrapper">
                    <HeaderContainer />
                    <Navbar/>
                    <div className='app__wrapper_content'>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer  />}/>
                        <Route path='/login'
                               render={() => <LoginContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={music}/>
                        <Route path='/settings' component={settings}/>
                        <Route path='/Friends' component={Friends}/>
                        <Route path='/Sidebar' component={Sidebar}/>
                    </div>
                </div>

        );
    }
}

const MapStateToProps = (state: AppStateType) => {
    return {
       initialized:state.app.initialized
    }

}

export const AppContainer = compose <React.ComponentType> (
    connect(MapStateToProps,{initializeApp}),
  withRouter
    ) (App)

export const SamuraiJSApp = () => {
   return (
       <HashRouter>
        <Provider store={store}>
            <AppContainer />,
        </Provider>
    </HashRouter>
   )
}

