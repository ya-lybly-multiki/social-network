import React, {ChangeEvent, useEffect, useState} from 'react';


type PropsType = {
    userStatus: string
    updateUserStatus: (userStatus: string) => void
}

export const ProfileStatusWithHooks = (props: PropsType) => {

    const [editMode,setEditMode] = useState(false)
    const [status,setStatus] = useState(props.userStatus)

    useEffect( ()=> {
        setStatus(props.userStatus)
    },[props.userStatus])

    const changeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const deactivatedMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onClickSpan = () => {
        setEditMode(true)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <b style={{fontSize:"23px"}}>Status:</b>
                    <span onDoubleClick={onClickSpan} >
                        {props.userStatus || "add your status))"}
                    </span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    value={status}
                    onBlur={deactivatedMode}
                    autoFocus
                    onChange={changeInputHandler}
                />
            </div>
            }
        </div>
    );
}



