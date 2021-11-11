import React, {Component} from "react";
import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
import axios from "axios";
import Users from "./Users";





export class UsersAPI extends Component<MapStateToPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onSetCurrentPage = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items)
            })
    }

    render() {
        return <Users users={this.props.users}
                      totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      setCurrentPage={this.onSetCurrentPage}
                      toggle={this.props.toggle}
                      setUser={this.props.setUser}
        />
    }
}