import React, {ChangeEvent} from 'react';


type PropsType = {
    userStatus:string
    updateUserStatus:(userStatus:string) => void
}

class ProfileStatus extends React.Component<PropsType> {



    state = {
        editMode: false,
        userStatus:this.props.userStatus
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.userStatus)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({userStatus:e.currentTarget.value})
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {!this.props.userStatus ? "Set your status" : this.props.userStatus}
                    </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input value={this.state.userStatus}
                           onBlur={this.deactivateEditMode}
                           autoFocus
                           onChange={this.onStatusChange}
                    />
                </div>
                }
            </div>
        );
    }


};

export default ProfileStatus;