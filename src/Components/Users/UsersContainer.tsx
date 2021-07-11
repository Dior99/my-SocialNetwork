import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../Redux/redux-store";
import {
    followTC,
    getUsers,
    onPageNumber,
    setCurrentPage,
    setUsers,
    unfollowTC,
    UserType
} from "../../Redux/users-reducer";
import {Preloader} from "../Common/Preloader/Preloader"
import {redirectToLogin} from "../../HOC/redirectToLogin";
import { compose } from "redux";

type MapStatePropsType = {
    users: Array<UserType>
    totalUserCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    onPageNumber: (pageNumber: number, pageSize: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType, Array<UserType>> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageNumber = (pageNumber: number) => {
        this.props.onPageNumber(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageNumber={this.onPageNumber}
                   pageSize={this.props.pageSize}
                   totalUserCount={this.props.totalUserCount}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollowTC}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.followTC}/>
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

export default compose<ComponentType>(connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    getUsers,
    onPageNumber,
    followTC,
    unfollowTC }),
    //redirectToLogin
)(UsersContainer)
