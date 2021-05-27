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
        let stateCopy = {...state}
        stateCopy.post = [...state.post]
        if (newPost.title.trim() !== '') {
            stateCopy.post.push(newPost)
            stateCopy.newPostText = ''
        }
        return stateCopy
    }
    else if (action.type === REMOVE_POST) {
        let copyState = {...state}
        copyState.post = [...state.post]
        let delPost = copyState.post
        copyState.post = delPost.filter(p => p.id !== action.postID)
        return copyState
    }
    else if (action.type === LIKES_POST_COUNT) {
        let copyState = {...state}
        copyState.post = [...state.post]
        let post = copyState.post
        copyState.post = post.map(p => p.id === action.postID ? {...p, likes: p.likes + 1} : {...p})
        return copyState
    }
    else if (action.type === UPDATE_POST_TEXT) {
        let copyState = {...state}
        copyState.newPostText = action.newText;
        return copyState
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