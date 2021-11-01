
export type MessageType = {
    id:number
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
    newMessageBody:string
}



let initialState:DialogsPageType = {
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
}



const DialogsReducer = (state = initialState, action:FinalType):DialogsPageType => {
        switch (action.type) {
            case "SEND-MESSAGE":
                return {
                    ...state,
                    newMessageBody:action.body
                };
            case "UPDATE-NEW-MESSAGE":
                const newMessage:MessageType = {
                    id:Math.random() * 100,
                    message:state.newMessageBody
                }
                return {
                    ...state,
                newMessageBody: "",
                    messages: [...state.messages,{...newMessage}]
                };
            default: return state
        }
}

export type sendMessageCreatorType = ReturnType<typeof sendMessageCreator>
export type updateNewMessageBodyPostCreatorType = ReturnType<typeof updateNewMessageBodyPostCreator>

export type FinalType = sendMessageCreatorType | updateNewMessageBodyPostCreatorType


export const sendMessageCreator = () => {
    return {
        type:"UPDATE-NEW-MESSAGE"
    } as const
}

export const updateNewMessageBodyPostCreator = (body: string)=> {
    return {
        type: "SEND-MESSAGE",
        body: body
    } as const
}

export default DialogsReducer

