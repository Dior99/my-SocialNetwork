import {v1} from "uuid";

export const AvatarPost = "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"

const REMOVE_POST = "REMOVE-POST"
const LIKES_POST_COUNT = "LIKES-POST-COUNT"
const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"

type AddPostActionType = {
    type: typeof ADD_POST
}
type RemovePostActionType = {
    type: typeof REMOVE_POST
    postID: string
}
type LikesPostCountActionType = {
    type: typeof LIKES_POST_COUNT
    postID: string
}
type UpdatePostTextActionType = {
    type: typeof UPDATE_POST_TEXT
    newText: string
}
type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType | null
}

export type ProfileReducerActionType = AddPostActionType
    | RemovePostActionType
    | LikesPostCountActionType
    | UpdatePostTextActionType
    | setUserProfileActionType

export type PostType = {
    id: string
    title: string
    likes: number
    avatar: typeof AvatarPost
}
export type ContactsProfileType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}
export type PhotosProfileType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string,
    contacts: ContactsProfileType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string,
    userId: number,
    photos: PhotosProfileType | null
}

const initialState = {
    post: [
        {id: v1(), title: 'Post 1', likes: 5, avatar: AvatarPost},
        {id: v1(), title: 'Post 2', likes: 15, avatar: AvatarPost},
        {id: v1(), title: 'Post 3', likes: 25, avatar: AvatarPost},
    ] as Array<PostType>,
    newPostText: "Hello",
    profile: {} as ProfileType | null
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: v1(),
                title: state.newPostText,
                likes: 0,
                avatar: AvatarPost
            }
            if (newPost.title.trim() !== '') {
                return {
                    ...state,
                    newPostText: '',
                    post: [...state.post, newPost]
                }
            }
            return state
        case REMOVE_POST:
            return {
                ...state,
                post: [...state.post.filter(p => p.id !== action.postID)]
            }
        case LIKES_POST_COUNT:
            return {
                ...state,
                post: [...state.post.map(p => p.id === action.postID ? {...p, likes: p.likes + 1} : {...p})]
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
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
export const setUserProfile = (profile: ProfileType | null): setUserProfileActionType => ({type: SET_USER_PROFILE, profile})