import {v1} from "uuid";
import {AvatarPost, PostType, ProfilePageType} from "./State";

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

export const profileReducer = (state: ProfilePageType, action: ProfileReducerActionType)=> {
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