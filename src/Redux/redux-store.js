import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import { thunk } from "redux-thunk";
import appReducer from "./app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

const thunkMiddleware = thunk

let store = configureStore({reducer: reducers}, applyMiddleware(thunkMiddleware))

export default store