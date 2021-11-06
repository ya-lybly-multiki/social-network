import React from "react";
import {connect} from "react-redux";
import Users  from "./Users";
import {AppStateType} from "../../Redux/Redux-store";
import {Dispatch} from "redux";
import {GlobalACType, setUsersAC, toggleAC, UsersType} from "../../Redux/Users-reducer";


const MapStateToProps = (state:AppStateType) => {

    return {
      users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch: Dispatch<GlobalACType>) => {
    return {
        toggle : (userId:number) => dispatch(toggleAC(userId)),
        setUser: (users:UsersType) => dispatch(setUsersAC(users))
    }
}

const UsersContainer = connect(MapStateToProps,mapDispatchToProps) (Users)

export default UsersContainer