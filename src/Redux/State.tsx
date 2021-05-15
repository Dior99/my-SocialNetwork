const AvatarPost = "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"
const AvatarFriends = "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"

export type PostType = {
    id: number
    title: string
    likes: number
    avatar: typeof AvatarPost
}
export type MessageType = {
    id: number
    title: string
    name: string
    avatar: typeof AvatarFriends
}
export type DialogType = {
    id: number
    name: string
    avatar: typeof AvatarFriends
}
export type ProfilePageType = {
    post: Array<PostType>
}
export type MessagePageType = {
    message: Array<MessageType>
    dialogs: Array<DialogType>
}
export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}

export const state: StateType = {
    profilePage: {
        post: [
            {id: 1, title: 'Post 1', likes: 5, avatar: AvatarPost},
            {id: 2, title: 'Post 2', likes: 15, avatar: AvatarPost},
            {id: 3, title: 'Post 3', likes: 25, avatar: AvatarPost},
        ],
    },
    messagePage: {
        message: [
            {id: 1, title: "Hello", name: "Kristina", avatar: AvatarFriends},
            {id: 2, title: "How are your?", name: "Kristina", avatar: AvatarFriends},
            {id: 3, title: "Hello, I am fine", name: "Kolya", avatar: AvatarFriends},
        ],
        dialogs: [
            {id: 1, name: 'Kolya', avatar: AvatarFriends},
            {id: 2, name: 'Kristina', avatar: AvatarFriends},
            {id: 3, name: 'Misha', avatar: AvatarFriends},
            {id: 4, name: 'Alisa', avatar: AvatarFriends},
            {id: 5, name: 'Eva', avatar: AvatarFriends},
        ],
    }
}