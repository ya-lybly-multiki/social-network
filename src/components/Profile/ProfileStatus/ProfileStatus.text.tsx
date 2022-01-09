import React from 'react'
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import {updateUserStatus} from "../../../Redux/Profile-reduser";

describe("ProfileStatus component", ()=> {
    test('status from props should be in state', ()=> {
        const component = create(<ProfileStatus userStatus={"it-status"} updateUserStatus={updateUserStatus}/>)
        const instance = component.getInstance()
        expect(instance?.props.userStatus).toBe('it-status')
    })
})