import { authAPI } from "../components/api/api"

const SET_USER_DATA = 'auth/SET_USER_DATA'


let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.payload,
            }
        
        default: 
            return state
    }
}

const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload : {userId, email, login, isAuth} })

export const getAuthUserData = () => 
    async (dispatch) => {
        let response = await authAPI.getMe()
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData (id, email, login, true))
            }
    }


export const login = (email, password, setStatus) => 
    async (dispatch) => {
        let response = await authAPI.login(email, password)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                setStatus({error: response.data.messages})
            }
    }


export const logout = () => 
    async (dispatch) => {
        let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData (null, null, null, false))
            }
    }


export default authReducer