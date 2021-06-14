const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS = "SET-TOTAL-USERS"

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

type SetCurrentPageAT = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

type SetTotalUsersCount = {
    type: typeof SET_TOTAL_USERS
    totalUsers: number

}

export type ProfileReducerActionType = FollowAT | UnfollowAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCount

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
    totalUserCount: number
    pageSize: number
    currentPage: number
}

const initialState = {
    users: [] as Array<UsersType>,
    totalUserCount: 12686,
    pageSize: 100,
    currentPage: 1
}

type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ProfileReducerActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => (u.id === action.userID ? {...u, followed: true} : u))}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => (u.id === action.userID ? {...u, followed: false} : u))}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS:
            return {...state, totalUserCount: action.totalUsers}
    }
    return state;
}

export const followAC = (userID: number): FollowAT => ({type: FOLLOW, userID})
export const unfollowAC = (userID: number): UnfollowAT => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: Array<UsersType>): SetUsersAT => ({type: SET_USERS, users})
export const setCurrentPagesAC = (currentPage: number): SetCurrentPageAT => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersAC = (totalUsers: number): SetTotalUsersCount => ({type: SET_TOTAL_USERS, totalUsers})
