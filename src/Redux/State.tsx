import {rerenderUI} from "../Render";

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
    newPostText: string
}
export type MessagePageType = {
    message: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
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
        newPostText: "Hello",
    },
    messagePage: {
        message: [
            {id: 1, title: "Hello", name: "Kristina", avatar: AvatarFriends},
            {id: 2, title: "How are your?", name: "Kristina", avatar: AvatarFriends},
            {id: 3, title: "Hello, I am fine", name: "Kolya", avatar: AvatarFriends},
        ],
        newMessageText: "Hello",
        dialogs: [
            {id: 1, name: 'Kolya', avatar: AvatarFriends},
            {id: 2, name: 'Kristina', avatar: AvatarFriends},
            {id: 3, name: 'Misha', avatar: AvatarFriends},
            {id: 4, name: 'Alisa', avatar: AvatarFriends},
            {id: 5, name: 'Eva', avatar: AvatarFriends},
        ],
    }
}

export function addPost() {
    let newPost: PostType = {
        id: 4,
        title: state.profilePage.newPostText,
        likes: 0,
        avatar: AvatarPost
    }
    state.profilePage.post.push(newPost)
    state.profilePage.newPostText = ''
    rerenderUI(state);
}

export function removePost(postID: number) {
    let delPost = state.profilePage.post
    state.profilePage.post = delPost.filter(p => p.id !== postID)
    rerenderUI(state)
}

export function likesCount(postID: number) {
    let post = state.profilePage.post
    state.profilePage.post = post.map(p => p.id === postID ? {...p, likes: p.likes + 1} : {...p})
    rerenderUI(state)
}

export function updatePostText(newText: string) {
    state.profilePage.newPostText = newText;
    rerenderUI(state);
}

export function addMessage() {
    let newMessage: MessageType = {
        id: 4,
        title: state.messagePage.newMessageText,
        name: "Kolya",
        avatar: AvatarFriends
    }
    state.messagePage.message.push(newMessage)
    state.messagePage.newMessageText = ''
    rerenderUI(state)
}

export function updateMessageText(newText: string) {
    state.messagePage.newMessageText = newText;
    rerenderUI(state)
}