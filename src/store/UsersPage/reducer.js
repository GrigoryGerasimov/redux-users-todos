import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersAsync } from "./actions";

// reducer Vanilla Redux

// import { FETCH_USERS, FETCH_USERS_SUCCEEDED, FETCH_USERS_FAILED } from "./actions";
//
// const initialState = {
//     usersData: [],
//     loading: false,
//     error: null
// };
//
// export const UsersReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_USERS: {
//             return { ...state, loading: true };
//         }
//         case FETCH_USERS_SUCCEEDED: {
//             return { ...state, loading: false, usersData: action.payload }
//         }
//         case FETCH_USERS_FAILED: {
//             return { ...state, loading: false, error: action.payload }
//         }
//         default: {
//             return state;
//         }
//     }
// };

// =====================================================================

// reducer Redux Toolkit

const initialState = {
    usersData: [],
    loading: false,
    error: null
};

export const UsersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        // fetchUsers(state) {
        //     state.loading = true;
        // },
        // fetchUsersSucceeded(state, action) {
        //     state.loading = false;
        //     state.usersData = action.payload;
        // },
        // fetchUsersFailed(state, action) {
        //     state.loading = false;
        //     state.error = action.payload;
        // }
    },
    extraReducers: {
        [fetchUsersAsync.pending.type]: state => {
            state.loading = true;
        },
        [fetchUsersAsync.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.usersData = action.payload;
        },
        [fetchUsersAsync.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});
