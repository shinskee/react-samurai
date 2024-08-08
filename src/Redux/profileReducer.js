import { profileAPI, usersAPI } from "../components/api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero omnis ullam distinctio debitis nostrum mollitia odio inventore fugit vel maiores. Qui dolorem quos asperiores veniam autem provident at saepe nulla?', likeCount: 2},
        {id: 2, message: 'TEXT', likeCount: 12},
        {id: 3, message: 'TEXT TEXT TEXT TEXT', likeCount: 1}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case UPDATE_NEW_POST_MESSAGE:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
        return {
            ...state,
            profile: action.profile
        }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_POST_MESSAGE, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserStatus = (userId) => 
    async (dispatch) => {
           let response = await profileAPI.getStatus(userId)
                dispatch(setStatus(response.data))
            }


export const updateUserStatus = (status) => 
    async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }            
    }


export const getUserProfile = (userId) => 
    async (dispatch) => {
        let response = await usersAPI.getProfile(userId)
                dispatch(setUserProfile(response.data))
    }


export default profileReducer