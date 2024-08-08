import React from 'react';
import { addPostActionCreator, updateNewMessageActionCreator } from '../../../Redux/profileReducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
} 

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;