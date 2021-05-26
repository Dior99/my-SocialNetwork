import {v1} from "uuid";

export const AvatarPost = "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"

const REMOVE_POST = "REMOVE-POST"
const LIKES_POST_COUNT = "LIKES-POST-COUNT"
const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"

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

export type ProfileReducerActionType = AddPostActionType | RemovePostActionType | LikesPostCountActionType | UpdatePostTextActionType

export type PostType = {
    id: string
    title: string
    likes: number
    avatar: typeof AvatarPost
}

const initialState = {
    post: [
        {id: v1(), title: 'Post 1', likes: 5, avatar: AvatarPost},
        {id: v1(), title: 'Post 2', likes: 15, avatar: AvatarPost},
        {id: v1(), title: 'Post 3', likes: 25, avatar: AvatarPost},
    ] as Array<PostType>,
    newPostText: "Hello",
}

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerActionType): InitialStateType => {
    if (action.type === ADD_POST) {
        let newPost: PostType = {
            id: v1(),
            title: state.newPostText,
            likes: 0,
            avatar: AvatarPost
        }
        if (newPost.title.trim() !== '') {
            state.post.push(newPost)
            state.newPostText = ''
        }
    }
    else if (action.type === REMOVE_POST) {
        debugger
        let delPost = state.post
        state.post = delPost.filter(p => p.id !== action.postID)
    }
    else if (action.type === LIKES_POST_COUNT) {
        let post = state.post
        state.post = post.map(p => p.id === action.postID ? {...p, likes: p.likes + 1} : {...p})
    }
    else if (action.type === UPDATE_POST_TEXT) {
        state.newPostText = action.newText;
    }
    return state

}

export const removePostAC = (id: string): RemovePostActionType => ({
    type: REMOVE_POST,
    postID: id
})
export const likesCountAC = (id: string): LikesPostCountActionType => ({
    type: LIKES_POST_COUNT,
    postID: id
})
export const addPostAC = (): AddPostActionType => ({
    type: ADD_POST
})
export const updatePostTextAC = (newText: string): UpdatePostTextActionType => ({
    type: UPDATE_POST_TEXT,
    newText: newText
})