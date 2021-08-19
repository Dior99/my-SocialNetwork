import {v1} from "uuid";
import {profileAPI} from "../API/api";
import {Dispatch} from "redux";

export const AvatarPost = "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"

const REMOVE_POST = "REMOVE-POST"
const LIKES_POST_COUNT = "LIKES-POST-COUNT"
const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_USER_STATUS = "SET-USER-STATUS"
const SET_USER_PHOTO = "SET-USER-PHOTO"

type AddPostActionType = {
    type: typeof ADD_POST
    newPost: string
}
type RemovePostActionType = {
    type: typeof REMOVE_POST
    postID: string
}
type LikesPostCountActionType = {
    type: typeof LIKES_POST_COUNT
    postID: string
}
type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
type setUserStatusActionType = {
    type: typeof SET_USER_STATUS
    status: string
}
type setPhotoActionType = {
    type: typeof SET_USER_PHOTO
    photo: PhotosProfileType
}

export type ProfileActionType = AddPostActionType
    | RemovePostActionType
    | LikesPostCountActionType
    | setUserProfileActionType
    | setUserStatusActionType
    | setPhotoActionType

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
    small: string | null
    large: string | null
}
export type ProfileType = {
    aboutMe: string,
    contacts: ContactsProfileType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string,
    userId: number,
    photos: PhotosProfileType
}

const initialState = {
    post: [
        {id: v1(), title: 'Post 1', likes: 5, avatar: AvatarPost},
        {id: v1(), title: 'Post 2', likes: 15, avatar: AvatarPost},
        {id: v1(), title: 'Post 3', likes: 25, avatar: AvatarPost},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ""
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: v1(),
                title: action.newPost,
                likes: 0,
                avatar: AvatarPost
            }
            if (newPost.title.trim() !== '') {
                return {
                    ...state,
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
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_USER_STATUS:
            return {...state, status: action.status}

        case SET_USER_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photo} as ProfileType}
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
export const addPostAC = (newPost: string): AddPostActionType => ({
    type: ADD_POST, newPost
})
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status: string): setUserStatusActionType => ({type: SET_USER_STATUS, status})
export const setPhoto = (photo: PhotosProfileType): setPhotoActionType => ({type: SET_USER_PHOTO, photo})

export const getProfile = (userId: number) => (dispatch: Dispatch<ProfileActionType>) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getStatus = (userId: number) => (dispatch: Dispatch<ProfileActionType>) => {
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setUserStatus(res.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch<ProfileActionType>) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}

export const savePhoto = (photo: File) => (dispatch: Dispatch<ProfileActionType>) => {
    profileAPI.savePhoto(photo)
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(setPhoto(res.data.data.photos))
            }
        })
}



