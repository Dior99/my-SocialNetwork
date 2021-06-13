const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

type FollowAT = {
    type: typeof FOLLOW
    userID: number
}

type UnfollowAT = {
    type: typeof UNFOLLOW
    userID: number
}

type SetUsersAT = {
    type: typeof SET_USERS
    users: Array<UsersType>
}

export type ProfileReducerActionType = FollowAT | UnfollowAT | SetUsersAT

export type UsersType = {
    "name": string
    "id": number
    "uniqueUrlName": null
    "photos": {
        "small": null | string
        "large": null | string
    },
    "status": null
    "followed": boolean
}

const initialState = {
    users: [] as Array<UsersType>,
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

export const followAC = (userID: number): FollowAT => ({type: FOLLOW, userID})
export const unfollowAC = (userID: number): UnfollowAT => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: Array<UsersType>): SetUsersAT => ({type: SET_USERS, users})
