import React, {ChangeEvent} from 'react';


type PropsType = {
    userStatus:string
}

class ProfileStatus extends React.Component<PropsType> {



    state = {
        editMode: false,
        userStatus:this.props.userStatus
    }

    activeEditMode = () => {
        this.setState({
            editMode:!this.state.editMode
        })
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({userStatus:e.currentTarget.value})
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activeEditMode}>
                        {!this.props.userStatus ? "Set your status" : this.props.userStatus}
                    </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input value={this.state.userStatus}
                           onBlur={this.activeEditMode}
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