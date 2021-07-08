import {
    addMessageAC,
    AvatarFriends,
    DialogType,
    InitialStateType,
    messageReducer,
    MessageType, updateMessageTextAC
} from "./message-reducer";
import {v1} from "uuid";

let startState: InitialStateType
beforeEach(() => {
    startState = {
        message: [
            {id: v1(), title: "Hello", name: "Kristina", avatar: AvatarFriends},
            {id: v1(), title: "How are your?", name: "Kristina", avatar: AvatarFriends},
            {id: v1(), title: "Hello, I am fine", name: "Kolya", avatar: AvatarFriends},
        ] as Array<MessageType>,
        newMessageText: "Hello",
        dialogs: [
            {id: v1(), name: 'Kolya', avatar: AvatarFriends},
            {id: v1(), name: 'Kristina', avatar: AvatarFriends},
            {id: v1(), name: 'Misha', avatar: AvatarFriends},
            {id: v1(), name: 'Alisa', avatar: AvatarFriends},
            {id: v1(), name: 'Eva', avatar: AvatarFriends},
        ] as Array<DialogType>,
    }
})

test("the message should be added to the state", () => {

    const endState = messageReducer(startState, addMessageAC())

    expect(endState.message.length).toBe(4)

})

test("the message text should be updated", () => {

    const endState = messageReducer(startState, updateMessageTextAC("REACT!!!"))

    expect(endState.newMessageText.length).toBe(8)
    expect(endState.newMessageText).toBe("REACT!!!")
})