const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS = "SET-TOTAL-USERS"
const SERVER_IS_FETCHING = "SERVER-IS-FETCHING"

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
    users: Array<UserType>
}

type SetCurrentPageAT = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

type SetTotalUsersCountAT = {
    type: typeof SET_TOTAL_USERS
    totalUsers: number

}

type ServerIsFetchingAT = {
    type: typeof SERVER_IS_FETCHING
    isFetching: boolean

}

export type ProfileReducerActionType = FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT
    | ServerIsFetchingAT

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: {
        small: null | string
        large: null | string
    },
    status: null
    followed: boolean
}

export const initialState = {
    users: [] as Array<UserType>,
    totalUserCount: 12686,
    pageSize: 100,
    currentPage: 1,
    isFetching: false
}

export type InitialStateType = typeof initialState

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
        case SERVER_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
    }
    return state;
}

export const follow = (userID: number): FollowAT => ({type: FOLLOW, userID})
export const unfollow = (userID: number): UnfollowAT => ({type: UNFOLLOW, userID})
export const setUsers = (users: Array<UserType>): SetUsersAT => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageAT => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsers = (totalUsers: number): SetTotalUsersCountAT => ({type: SET_TOTAL_USERS, totalUsers})
export const serverIsFetching = (isFetching: boolean): ServerIsFetchingAT => ({type: SERVER_IS_FETCHING, isFetching})
