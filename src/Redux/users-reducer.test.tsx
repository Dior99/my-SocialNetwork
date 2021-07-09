import {
    followAC,
    initialState,
    InitialStateType, serverIsFetching, setCurrentPage, setFollowingInProgress,
    setTotalUsers,
    setUsers,
    unfollowAC,
    usersReducer,
    UserType
} from "./users-reducer"

let startState: InitialStateType = initialState;

let testUser: UserType = {
    name: 'Valera',
    id: 1,
    uniqueUrlName: null,
    photos: {
        small: '',
        large: 'null | string',
    },
    status: null,
    followed: false,
}
beforeEach(() => {
    startState = {
        ...initialState,
        users: [testUser],
        totalUserCount: 12686,
        pageSize: 100,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [2, 3, 4, 5]
    }
})

test("user subscription", () => {
    let state = startState;

    state = usersReducer(state, followAC(1))

    expect(state.users.filter(u => u.followed && u.id === 1).length).toBe(1)
})

test("unsubscribe from user", () => {
    let state = startState;

    state = usersReducer(state, unfollowAC(1))

    expect(state.users.filter(u => !u.followed && u.id === 1).length).toBe(1)
})

test("users from the database must be installed", () => {
    let user = [
        { name: 'Kolya', id: 1, uniqueUrlName: null, photos: {small: '', large: ''},
            status: null, followed: false },
        { name: 'Misha', id: 2, uniqueUrlName: null, photos: {small: '', large: ''},
            status: null, followed: false },
        { name: 'Dima', id: 3, uniqueUrlName: null, photos: {small: '', large: ''},
            status: null, followed: false },
    ];

    let state = usersReducer(startState, setUsers(user))

    expect(state.users.length).toBe(3)
    expect(state.users[0].name).toBe('Kolya')
})

test("the current page should be changed", () => {
    let state = usersReducer(startState, setCurrentPage(4))

    expect(state.currentPage).toBe(4)
})

test("the number of users from the database should be established", () => {
    let state = usersReducer(startState, setTotalUsers(122))

    expect(state.totalUserCount).toBe(122)
})

test("the isFetching value should change", () => {
    let state = usersReducer(startState, serverIsFetching(true))

    expect(state.isFetching).toBe(true)
})

test("if isFetching is true then follow/unfollow buttons should be desabled", () => {

    let state = usersReducer(startState, setFollowingInProgress(false, 2))

    expect(state.followingInProgress).toEqual([3, 4, 5])
})