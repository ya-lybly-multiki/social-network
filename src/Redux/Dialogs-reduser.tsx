import { v1 } from "uuid"

export type MessageType = {
    id:string
    message:string
}

export type DialogType = {
    id:number
    name:string
    avatar:string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages:Array<MessageType>
}



let initialState:DialogsPageType = {
    messages: [
        {id: v1(), message: "privet kotik"},
        {id: v1(), message: "Pudge ss"},
        {id: v1(), message: "Idi rabotai"},
        {id: v1(), message: "Hm ya lol"},
        {id: v1(), message: "Ti gde?"},
        {id: v1(), message: "Bombim Dalshe"}
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

}



const DialogsReducer = (state = initialState, action:FinalType):DialogsPageType => {
        switch (action.type) {
            case 'ADD-MESSAGE':
                const text = action.newMessageBody
                return {
                    ...state,
                    messages: [...state.messages, {id: v1(), message: text}]
                }
            default:
                return state
        }
}

export type sendMessageCreatorType = ReturnType<typeof sendMessageCreator>


export type FinalType = sendMessageCreatorType


export const sendMessageCreator = (newMessageBody:string) => {
    return {
        type:"ADD-MESSAGE",
        newMessageBody
    } as const
}



export default DialogsReducer

