import React from 'react'
import { connect } from "react-redux"
import { follow, unFollow, toggleFollow, setCurrentPage, toggleFollowingInProgress, requestUsers } from "../../Redux/usersReducer"
import Users from './Users'
import { compose } from '@reduxjs/toolkit'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUserss } from '../../Redux/users-selectors'

class UsersContainer extends React.Component { 
    // props.setUsers([
    //     {followed: false, id: 1, name: 'Mikasa Ackerman', img: 'https://i.getgems.io/ZFMFnCz5ltFS-e0evoJzwxglp_tHJSb2U01G4MWilSo/rs:fill:512:512:1/g:ce/czM6Ly9nZXRnZW1zLXMzL3VzZXItbWVkaWEvMjMtMDMtMjAyNC8zMzgzMTM3LzUxNzUwMC5qcGc', status: 'So good', location: {city: 'Wall Rose', country: 'Erudia'}},
    //     {followed: true, id: 2, name: 'Asuna Yuuki', img: 'https://avatars.akamai.steamstatic.com/a084594365dabb21c402405052872f37a00604bf_full.jpg', status: "To keep doing your best, up until the very end.", location: {city: 'Tokyo', country: 'Japan'}},
    //     {followed: true, id: 3, name: 'Violet Evergarden', img: 'https://avatars.mds.yandex.net/i?id=19b83c40d363b20090a63104f8addaee1fd8e7fb-12648808-images-thumbs&n=13', status: "I want to know what 'I love you' means…", location: {city: 'Leiden', country: 'Leidenschaftlich'}},
    //     {followed: false, id: 4, name: 'Emilia エミリア', img: 'https://i.pinimg.com/736x/15/6c/11/156c11c51a49e79ac11ec33f1bcb9122.jpg', status: 'My name is Emilia. Just Emilia.', location: {city: 'Lugunica', country: 'Royal Selection'}},
    //     {followed: false, id: 5, name: 'Power パワー', img: 'https://sun9-36.userapi.com/s/v1/ig2/m9vA-qemtX5GBe6u3tKPkikC5H8VQOPzsMRWuubGAEWAcQvlJJsGoXd7xaeilG233VBD9GOZ6Cnf8ER3hqcoVLaZ.jpg?size=200x200&quality=95&crop=440,60,1628,1628&ava=1', status: 'Such a foolish reason', location: {city: 'Tokyo', country: 'Japan'}}
    // ]) 
componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.getUsers(currentPage, pageSize)
}

onPageChanged = (pageNumber) => {
    const {pageSize} = this.props
    this.props.getUsers(pageNumber, pageSize)
}

render() { 
return ( 
    <>
        <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        isFetching={this.props.isFetching}
        toggleFollowingInProgress={this.props.toggleFollowingInProgress}
        followingInProgress={this.props.followingInProgress}
        />
    </>
    
);
}
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUserss(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, 
        { unFollow, follow, toggleFollow, setCurrentPage, toggleFollowingInProgress, getUsers: requestUsers }
),
// withAuthRedirect1
)(UsersContainer)

// export default (connect(mapStateToProps, 
//     { unFollow, follow, toggleFollow, setCurrentPage, toggleFollowingInProgress, getUsers }
// )(AuthRedirectComponent));