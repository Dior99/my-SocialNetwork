import {v1} from "uuid";

const AvatarPost = "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"
const AvatarFriends = "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"

export type PostType = {
    id: string
    title: string
    likes: number
    avatar: typeof AvatarPost
}
export type MessageType = {
    id: string
    title: string
    name: string
    avatar: typeof AvatarFriends
}
export type DialogType = {
    id: string
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
    dispatch: (action: ActionType) => void
}

type AddPostActionType = {
    type: "ADD-POST"
}
type RemovePostActionType = {
    type: "REMOVE-POST",
    postID: string
}
type LikesPostCountActionType = {
    type: "LIKES-POST-COUNT"
    postID: string
}
type UpdatePostTextActionType = {
    type: "UPDATE-POST-TEXT"
    newText: string
}
type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
type UpdateMessageTextActionType = {
    type: "UPDATE-MESSAGE-TEXT"
    newText: string
}

export type ActionType = AddPostActionType
    | RemovePostActionType
    | LikesPostCountActionType
    | UpdatePostTextActionType
    | AddMessageActionType
    | UpdateMessageTextActionType

export const store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {id: v1(), title: 'Post 1', likes: 5, avatar: AvatarPost},
                {id: v1(), title: 'Post 2', likes: 15, avatar: AvatarPost},
                {id: v1(), title: 'Post 3', likes: 25, avatar: AvatarPost},
            ],
            newPostText: "Hello",
        },
        messagePage: {
            message: [
                {id: v1(), title: "Hello", name: "Kristina", avatar: AvatarFriends},
                {id: v1(), title: "How are your?", name: "Kristina", avatar: AvatarFriends},
                {id: v1(), title: "Hello, I am fine", name: "Kolya", avatar: AvatarFriends},
            ],
            newMessageText: "Hello",
            dialogs: [
                {id: v1(), name: 'Kolya', avatar: AvatarFriends},
                {id: v1(), name: 'Kristina', avatar: AvatarFriends},
                {id: v1(), name: 'Misha', avatar: AvatarFriends},
                {id: v1(), name: 'Alisa', avatar: AvatarFriends},
                {id: v1(), name: 'Eva', avatar: AvatarFriends},
            ],
        }
    },
    _changedState() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._changedState = observer
    },

    dispatch(action: ActionType) {
        if (action.type === "ADD-POST") {
            let newPost: PostType = {
                id: v1(),
                title: this._state.profilePage.newPostText,
                likes: 0,
                avatar: AvatarPost
            }
            if (newPost.title.trim() !== '') {
                this._state.profilePage.post.push(newPost)
                this._state.profilePage.newPostText = ''
            }
            this._changedState();
        }
        else if (action.type === "REMOVE-POST") {
            debugger
            let delPost = this._state.profilePage.post
            this._state.profilePage.post = delPost.filter(p => p.id !== action.postID)
            this._changedState()
        }
        else if (action.type === "LIKES-POST-COUNT") {
            let post = this._state.profilePage.post
            this._state.profilePage.post = post.map(p => p.id === action.postID ? {...p, likes: p.likes + 1} : {...p})
            this._changedState()
        }
        else if (action.type === "UPDATE-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._changedState();
        }
        else if (action.type === "ADD-MESSAGE") {
            let newMessage: MessageType = {
                id: v1(),
                title: this._state.messagePage.newMessageText,
                name: "Kolya",
                avatar: AvatarFriends
            }
            if(newMessage.title.trim() !== "") {
                this._state.messagePage.message.push(newMessage)
                this._state.messagePage.newMessageText = ''
            }
            this._changedState()
        }
        else if (action.type === "UPDATE-MESSAGE-TEXT") {
            this._state.messagePage.newMessageText = action.newText;
            this._changedState()
        }
    }

}

export const removePostAC = (id: string): RemovePostActionType => ({
        type: "REMOVE-POST",
        postID: id
    })
export const likesCountAC = (id: string): LikesPostCountActionType => ({
        type: "LIKES-POST-COUNT",
        postID: id
    })
export const addPostAC = (): AddPostActionType => ({
    type: "ADD-POST"
})
export const updatePostTextAC = (newText: string): UpdatePostTextActionType => ({
    type: "UPDATE-POST-TEXT",
    newText: newText
})
export const addMessageAC = (): AddMessageActionType => ({
    type: "ADD-MESSAGE"
})
export const updateMessageTextAC = (newMessage: string): UpdateMessageTextActionType => ({
    type: "UPDATE-MESSAGE-TEXT",
    newText: newMessage
})


