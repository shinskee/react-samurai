import { current } from "@reduxjs/toolkit";
import { usersAPI } from "../components/api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const UN_FOLLOW = "UN-FOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET-USERS";
const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IS_PROGRESS = "TOGGLE_FOLLOWING_IS_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [false],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
          }
          return user;
        }),
      };

    case FOLLOW:
      return {
        ...state,
        // users: state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: true };
        //   }
        //   return user;
        // }),
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
      };

    case UN_FOLLOW:
      return {
        ...state,
        // users: state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: false };
        //   }
        //   return user;
        // }),
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_FOLLOWING_IS_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unFollowSuccess = (userId) => ({ type: UN_FOLLOW, userId });
export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_IS_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let response = await usersAPI.getUsers(page, pageSize);
  dispatch(setCurrentPage(page));
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.data.items));
  dispatch(setTotalUsersCount(response.data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingInProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingInProgress(false, userId));
}

export const unFollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.deleteFollow.bind(usersAPI), unFollowSuccess)
};

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.postFollow.bind(usersAPI), followSuccess)
};

export default usersReducer;
