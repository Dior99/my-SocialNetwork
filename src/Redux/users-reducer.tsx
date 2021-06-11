import {v1} from "uuid";

export const AvatarPost = "https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-4.jpg"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

type FollowAT = {
    type: typeof FOLLOW
    userID: string
}

type UnfollowAT = {
    type: typeof UNFOLLOW
    userID: string
}

type SetUsersAT = {
    type: typeof SET_USERS
    users: Array<UsersType>
}

export type ProfileReducerActionType = FollowAT | UnfollowAT | SetUsersAT

type LocationType = {
    country: string
    city: string
}

export type UsersType = {
    id: string
    followed: boolean
    name: string
    status: string
    avatar: typeof AvatarPost
    location: LocationType
}

const initialState = {
    users: [
        /*{
            id: v1(),
            followed: false,
            name: 'Dima',
            status: "I am a BOSS",
            avatar: AvatarPost,
            location: {country: 'Russia', city: 'Moscow'}
        },
        {
            id: v1(),
            followed: true,
            name: 'Kristina',
            status: "Mother",
            avatar: AvatarPost,
            location: {country: 'Ukraine', city: 'Kiev'}
        },
        {
            id: v1(),
            followed: false,
            name: 'Dima',
            status: "I am a BOSS",
            avatar: AvatarPost,
            location: {country: 'Russia', city: 'Rostov-on-Don'}
        },*/
    ] as Array<UsersType>,
}

type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ProfileReducerActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => (u.id === action.userID ? {...u, followed: true} : u))}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => (u.id === action.userID ? {...u, followed: false} : u))}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
    }
    return state
}

export const followAC = (userID: string): FollowAT => ({type: FOLLOW, userID})
export const unfollowAC = (userID: string): UnfollowAT => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: Array<UsersType>): SetUsersAT => ({type: SET_USERS, users})
