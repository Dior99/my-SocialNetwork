import {authReducer, InitialStateType, setUserData} from "./auth-reducer";

let startState: InitialStateType
beforeEach(() => {
    startState = {
        id: null,
        login: null,
        email: null,
        isAuth: false
    }
})

test("login data must change the state", () => {
    const dataLogin = {
        id: "1",
        login: "Dior",
        email: "n.shaldaev@yandex.ru"
    }

    const endState = authReducer(startState, setUserData(dataLogin.email, dataLogin.id, dataLogin.login, ))

    expect(endState.id).toBe("1")
    expect(endState.login).toBe("Dior")
    expect(endState.email).toBe("n.shaldaev@yandex.ru")
    expect(endState.isAuth).toBe(true)
})