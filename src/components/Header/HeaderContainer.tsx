import React, {Component} from 'react';
import Header from "./Header";

import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {getAuthUserData, logOut} from "../../Redux/Auth-reducer";


type MapStateToProps = {
    login: string | null
    isAuth:boolean
}

type MapDispatchToPropsType = {
    logOut:()=> void
}

class HeaderAPI extends Component<MapStateToProps & MapDispatchToPropsType> {


    render() {
        return <Header {...this.props}/>
    }
}


const MapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }

}

const HeaderContainer = connect(MapStateToProps,
    {logOut})(HeaderAPI)

export default HeaderContainer;