import React, {ChangeEvent, useState} from 'react';


type PropsType = {
    userStatus: string
    updateUserStatus: (userStatus: string) => void
}

export const ProfileStatusWithHooks = (props: PropsType) => {

    const [editMode,setEditMode] = useState(false)
    const [status,setStatus] = useState(props.userStatus)



    const changeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const deactivatedMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={()=> {setEditMode(true)}} >
                        {props.userStatus || "-----"}
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



