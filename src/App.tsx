import React, {Component} from "react";
import './App.css';
import {HashRouter, withRouter,} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";

import store, {AppStateType} from "./Redux/Redux-store";
import Preloader from "./components/utils/preloader/Preloader";
import MainContent from "./appContents/MainContent";
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import {initializeApp} from "./Redux/App-reducer";



type MapDispatchToPropsType = {
    getSetUserData: () => void
    initializeApp: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}



class App extends Component<MapDispatchToPropsType & MapStateToPropsType> {



    componentDidMount() {
        this.props.initializeApp()
    }


    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app__wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app__wrapper_content'>
                   <MainContent/>
                </div>
            </div>
        )
            ;
    }
}

const MapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialization
    }

}


export const AppContainer = compose<React.ComponentType>(
    connect(MapStateToProps, {initializeApp}),
    withRouter
)(App)

export const SamuraiJSApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>,
            </Provider>
        </HashRouter>
    )
}

