import { getAuthUserData } from "./auth-reducer"

const INITIALIZED__SUCCESS = 'INITIALIZED__SUCCESS'


let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED__SUCCESS: 
            return {
                ...state,
                initialized: true
            }
        
        default: 
            return state
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED__SUCCESS })

export const initilizeApp = () => 
    (dispatch) => {
        let promise = dispatch(getAuthUserData ())
        promise.then(() => {
            dispatch(initializedSuccess ())
        })
    }


export default appReducer