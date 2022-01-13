

import {v1} from "uuid";
export type NavigationType = {
    id: string
    pageName : string
    link : string
}
const initialState = {
    navigation: [
        {id: v1(), pageName: 'Profile', link: '/profile'},
        {id: v1(), pageName: 'Messages', link: '/dialogs'},
        {id: v1(), pageName: 'Users', link: '/users'},
        {id: v1(), pageName: 'News', link: '/news'},
        {id: v1(), pageName: 'Music', link: '/music'},
        {id: v1(), pageName: 'Settings', link: '/settings'},
    ]
}

export const navbarReducer = (state: NavBarType = initialState, action: any) => {
    return state
}

export type NavBarType = {
    navigation: Array<NavigationType>
}