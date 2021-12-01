import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {getUserProfile, ProfileType} from "../../Redux/Profile-reduser";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile:ProfileType | null
    isAuth:boolean
}

type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

type MapDispatchToProps = {
    getUserProfile:(userId:string)=> void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToProps

 class ProfileContainer   extends React.Component<PropsType>{

    componentDidMount():void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={"/login"}/>

        return(
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}



const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
        return {
            profile:state.profilePage.profile,
            isAuth:state.auth.isAuth
        }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer )

export default  connect (mapStateToProps,{getUserProfile})(withUrlDataContainerComponent)

