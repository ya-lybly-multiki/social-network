import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {getStatus, getUserProfile, ProfileType, updateUserStatus} from "../../Redux/Profile-reduser";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    profile:ProfileType | null
    userStatus:string
    isAuth: boolean
    authorizedUserId: number | null
}

type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

type MapDispatchToProps = {
    getUserProfile:(userId:string)=> void
    getStatus:(userId:string)=> void
    updateUserStatus:(userStatus:string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToProps

 class ProfileContainer   extends React.Component<PropsType>{

    componentDidMount():void {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            if(this.props.authorizedUserId) {
                userId = this.props.authorizedUserId
            } else {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(String(userId))
        this.props.getStatus(String(userId))
    }

    render() {


        return(
            <Profile {...this.props}
                     userStatus={this.props.userStatus}
                     profile={this.props.profile}
                     updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}


const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
        return {
            profile:state.profilePage.profile,
            userStatus:state.profilePage.userStatus,
            isAuth:state.auth.isAuth,
            authorizedUserId:state.auth.userId
        }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,{getUserProfile,
        getStatus,updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)



