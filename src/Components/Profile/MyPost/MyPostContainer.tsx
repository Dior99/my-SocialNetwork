import {addPostAC, likesCountAC, PostType, removePostAC, updatePostTextAC} from "../../../Redux/profile-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import { Dispatch } from 'redux';

type MapStateToProps = {
    posts: Array<PostType>
    newPostText: string
}

type MapDispatchToProps = {
    addPost: () => void
    changePostText: (text: string) => void
    removePost: (postId: string) => void
    likesCountPost: (postId: string) => void
}

export type MyPostPropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        posts: state.profilePage.post,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        changePostText: (text: string) => {
            dispatch(updatePostTextAC(text))
        },
        removePost: (postId: string) => {
            dispatch(removePostAC(postId))
        },
        likesCountPost: (postId: string) => {
            dispatch(likesCountAC(postId))
        }
    }
}

export const MyPostContainer = connect (mapStateToProps, mapDispatchToProps) (MyPost)


