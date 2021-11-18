import React, {Component} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import { setUserData} from "../../Redux/Auth-reducer";


type MapStateToProps = {
    login: string | null
    isAuth:boolean
}

type MapDispatchToPropsType = {
    setUserData: (userId: number, email: string, login: string) => void
}

class HeaderAPI extends Component<MapStateToProps & MapDispatchToPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setUserData(id, email, login)
                }
            })
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

const HeaderContainer = connect(MapStateToProps, {setUserData})(HeaderAPI)

export default HeaderContainer;