import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {getStatus, getUserProfile, ProfileType} from "../../Redux/Profile-reduser";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    profile:ProfileType | null
    userStatus:string
}

type PathParamType = {
    userId: string
    userStatus:string
}

type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

type MapDispatchToProps = {
    getUserProfile:(userId:string)=> void
    getStatus:(userId:string)=> void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToProps

 class ProfileContainer   extends React.Component<PropsType>{

    componentDidMount():void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {


        return(
            <Profile {...this.props}
                     userStatus={this.props.userStatus}
                     profile={this.props.profile}/>
        )
    }
}


const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
        return {
            profile:state.profilePage.profile,
            userStatus:state.profilePage.userStatus
        }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,{getUserProfile,getStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)



