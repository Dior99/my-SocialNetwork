import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../Redux/redux-store";
import {
    follow, serverIsFetching,
    setCurrentPage,
    setTotalUsers,
    setUsers,
    unfollow,
    UsersType
} from "../../Redux/users-reducer";
import {Preloader} from "../Common/Preloader/Preloader";
import {userAPI} from "../../API/api";

type MapStatePropsType = {
    users: Array<UsersType>
    totalUserCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsers: (totalUsers: number) => void
    serverIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType, Array<UsersType>> {
    componentDidMount() {
        this.props.serverIsFetching(true);
        userAPI.getUser(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setTotalUsers(data.totalCount);
                this.props.serverIsFetching(false);
                this.props.setUsers(data.items);
            })
    }

    onPageNumber = (pageNumber: number) => {
        this.props.serverIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        userAPI.onPageNumber(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.serverIsFetching(false);
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users setCurrentPage={this.props.setCurrentPage}
                   onPageNumber={this.onPageNumber}
                   pageSize={this.props.pageSize}
                   setUsers={this.props.setUsers}
                   totalUserCount={this.props.totalUserCount}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}/>
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    serverIsFetching
})(UsersContainer)
