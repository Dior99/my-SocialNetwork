import {addPostAC, likesCountAC, PostType, removePostAC} from "../../../Redux/profile-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {Dispatch} from 'redux';

type MapStateToProps = {
    posts: Array<PostType>
}

type MapDispatchToProps = {
    addPost: (newPost: string) => void
    removePost: (postId: string) => void
    likesCountPost: (postId: string) => void
}

export type MyPostPropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        posts: state.profilePage.post,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: (newPost: string) => {
            dispatch(addPostAC(newPost))
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


