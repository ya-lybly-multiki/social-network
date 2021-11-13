import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {ProfileType, setUserProfile} from "../../Redux/Profile-reduser";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile:ProfileType | null
}

type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

type MapDispatchToProps = {
    setUserProfile:(profile:ProfileType | null)=> void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToProps

 class ProfileContainer   extends React.Component<PropsType>{

    componentDidMount():void {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return(
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}



const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
        return {
            profile:state.profilePage.profile
        }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer )

export default  connect (mapStateToProps,{setUserProfile})(withUrlDataContainerComponent)

