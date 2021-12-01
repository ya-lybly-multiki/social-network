import React, {Component} from 'react';
import Header from "./Header";

import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {getSetUserData} from "../../Redux/Auth-reducer";


type MapStateToProps = {
    login: string | null
    isAuth:boolean
}

type MapDispatchToPropsType = {
    getSetUserData: () => void
}

class HeaderAPI extends Component<MapStateToProps & MapDispatchToPropsType> {

    componentDidMount() {
       this.props.getSetUserData()
    }

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

const HeaderContainer = connect(MapStateToProps, {getSetUserData})(HeaderAPI)

export default HeaderContainer;