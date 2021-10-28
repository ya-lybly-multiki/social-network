import ProfileReducer, {addPostAC, changeNewTextAC} from "./Profile-reduser";
import DialogsReducer from "./Dialogs-reduser";

export type PostType = {
    id: number
    message: string
    likeCounts: number
}

export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
    avatar: string
}

export type FriendsType = {
    id: number
    name: string
    avatar?: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewPost: string
}

export type MessagesPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sideBar: SideBarType
}

export type SideBarType = {
    friends: Array<FriendsType>
}


export type StoreType = {
    _state: RootStateType
    changeNewText:(newTest:string) => void
    addPost: (postText: string) => void
    subscribe: (callback:() => void) => void
    _callSubscriber: () => void
    getState: () => RootStateType
    dispatch : (action: ActionTypes) => void
}


export type AddPostActionType = ReturnType<typeof addPostAC>

export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>



export type ActionTypes = AddPostActionType | ChangeNewTextActionType
    | sendMessageCreatorType | updateNewMessageBodyPostCreatorType



const store: StoreType = {
    _state:  {
        profilePage: {
            messageForNewPost: "" ,
            posts: [
                {id: 1, message: "hello everybody", likeCounts: 12},
                {id: 2, message: "its my first post", likeCounts: 13}
            ]
        },
        messagesPage: {
            messages: [
                {id: 1, message: "privet kotik"},
                {id: 2, message: "Pudge ss"},
                {id: 3, message: "Idi rabotai"},
                {id: 4, message: "Hm ya lol"},
                {id: 5, message: "Ti gde?"},
                {id: 6, message: "Bombim Dalshe"}
            ],
            dialogs: [
                {
                    id: 1,
                    name: "Sonya Kisulka",
                    avatar: "https://greatchat.ru/wp-content/uploads/2018/07/menyaem-avatar-v-telegramm1.jpg"
                },
                {
                    id: 2,
                    name: "Nikita",
                    avatar: "https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg"
                },
                {
                    id: 3,
                    name: "Alexander",
                    avatar: "https://whatsism.com/uploads/posts/2018-05/thumbs/1525373578_va_pikachu.jpg"
                },
                {
                    id: 4,
                    name: "Zakhar",
                    avatar: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg"
                },
                {
                    id: 5,
                    name: "Natasha",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKoEfDinRCmMj06Zu45Lh0E3wA9545JQvYQQ&usqp=CAU"
                },
                {
                    id: 6,
                    name: "Dimych",
                    avatar: "https://kopilkasovetov.com/wp-content/uploads/2013/06/kak-sdelat-chat-besplatno-600x600.jpg"
                }
            ],
            newMessageBody : " "
        },
        sideBar: {
            friends: [{
                id: 1,
                name: "Sonya Kisulka",
                avatar: "https://greatchat.ru/wp-content/uploads/2018/07/menyaem-avatar-v-telegramm1.jpg"
            },
                {
                    id: 4,
                    name: "Zakhar",
                    avatar: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg"
                },
                {
                    id: 6,
                    name: "Dimych",
                    avatar: "https://kopilkasovetov.com/wp-content/uploads/2013/06/kak-sdelat-chat-besplatno-600x600.jpg"
                }]
        }

    },
    changeNewText  (newText:string)  {
        this._state.profilePage.messageForNewPost = newText
        this._callSubscriber()
    },

    addPost  (postText: string)  {

        const newPost: PostType = {
            id: 5,
            message: postText,
            likeCounts: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber()
    },

    subscribe  (callback: () => void)  {
        this._callSubscriber = callback
    },
    _callSubscriber ()  {
        console.log("state changed")
    },
    getState () {
        return this._state
    },

    dispatch(action) {

        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.messagesPage = DialogsReducer(this._state.messagesPage,action)
        this._callSubscriber()
    }
}





export type sendMessageCreatorType = {
    type: "UPDATE-NEW-MESSAGE"
}



export type updateNewMessageBodyPostCreatorType = {
    type: "SEND-MESSAGE",
    body:string
}



export default store;