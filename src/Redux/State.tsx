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
export type StoreType = {
    _state: StateType
    _changedState: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    addPost: () => void
    removePost: (postID: number) => void
    likesPostCount: (postID: number) => void
    updatePostText: (newText: string) => void
    addMessage: () => void
    updateMessageText: (newText: string) => void
}

export const store: StoreType = {
    _state: {
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
    },

    getState () {
        return this._state;
    },
    _changedState ()  {
        console.log('state changed')
    },
    subscribe (observer: () => void) {
        this._changedState = observer
    },

    addPost() {
        let newPost: PostType = {
            id: 4,
            title: this._state.profilePage.newPostText,
            likes: 0,
            avatar: AvatarPost
        }
        this._state.profilePage.post.push(newPost)
        this._state.profilePage.newPostText = ''
        this._changedState();
    },
    removePost(postID: number) {
        let delPost = this._state.profilePage.post
        this._state.profilePage.post = delPost.filter(p => p.id !== postID)
        this._changedState()
    },
    likesPostCount(postID: number) {
        let post = this._state.profilePage.post
        this._state.profilePage.post = post.map(p => p.id === postID ? {...p, likes: p.likes + 1} : {...p})
        this._changedState()
    },
    updatePostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._changedState();
    },
    addMessage() {
        let newMessage: MessageType = {
            id: 4,
            title: this._state.messagePage.newMessageText,
            name: "Kolya",
            avatar: AvatarFriends
        }
        this._state.messagePage.message.push(newMessage)
        this._state.messagePage.newMessageText = ''
        this._changedState()
    },
    updateMessageText(newText: string) {
        this._state.messagePage.newMessageText = newText;
        this._changedState()
    }
}


