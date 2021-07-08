import {
    addPostAC,
    AvatarPost,
    InitialStateType, likesCountAC,
    PostType,
    profileReducer,
    ProfileType, removePostAC, setUserProfile,
    updatePostTextAC
} from "./profile-reducer"
import {v1} from "uuid";

let startState: InitialStateType
beforeEach(() => {
    startState = {
        post: [
            {id: v1(), title: 'Post 1', likes: 5, avatar: AvatarPost},
            {id: v1(), title: 'Post 2', likes: 15, avatar: AvatarPost},
            {id: v1(), title: 'Post 3', likes: 25, avatar: AvatarPost},
        ] as Array<PostType>,
        newPostText: "Hello",
        profile: {} as ProfileType | null
    }
})

test("the post should be added to the state", () => {

    const endState = profileReducer(startState, addPostAC())

    expect(endState.post.length).toBe(4)

})

test("the post text should be updated", () => {

    const endState = profileReducer(startState, updatePostTextAC("JavaScript"))

    expect(endState.newPostText.length).toBe(10)
    expect(endState.newPostText).toBe("JavaScript")
})

test("post should be deleted", () => {


    const endState = profileReducer(startState, removePostAC(startState.post[0].id))

    expect(endState.post.length).toBe(2)
    expect(endState.post[0].title).toBe("Post 2")
    expect(endState.post[1].likes).toBe(25)
})

test("the number of likes must be added", () => {

    const endState = profileReducer(startState, likesCountAC(startState.post[2].id))

    expect(endState.post[0].likes).toBe(5)
    expect(endState.post[1].likes).toBe(15)
    expect(endState.post[2].likes).toBe(26)
})

test("the user should be installed in profile", () => {
    const action = setUserProfile({
        aboutMe: '',
        contacts: {
            facebook: '',
            website: null,
            vk: '',
            twitter: '',
            instagram: '',
            youtube: null,
            github: '',
            mainLink: null,
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: "Kolyan",
        userId: 1,
        photos: null
    })

    const endState = profileReducer(startState, action)

    expect(endState.profile?.fullName).toBe("Kolyan")
    expect(endState.profile?.userId).toBe(1)
})