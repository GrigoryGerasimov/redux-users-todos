import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersService } from "./usersService";

// actions Vanilla Redux

// import { UsersService } from "./usersService";
//
// export const FETCH_USERS = "FETCH_USERS";
// export const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
// export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";
//
// export const fetchUsers = () => ({ type: FETCH_USERS });
// export const fetchUsersSucceeded = payload => ({ type: FETCH_USERS_SUCCEEDED, payload });
// export const fetchUsersFailure = payload => ({ type: FETCH_USERS_FAILED, payload })
//
// export const fetchUsersAsync = () => async (dispatch) => {
//     try {
//         dispatch(fetchUsers());
//         const data = await UsersService.getUsers();
//         dispatch(fetchUsersSucceeded(data));
//     } catch (error) {
//         dispatch(fetchUsersFailure(error.message));
//     }
// };

// =======================================================================

// actions Redux Toolkit

// const { fetchUsers, fetchUsersSucceeded, fetchUsersFailed } = UsersSlice.actions;

// export const fetchUsersAsync = () => async (dispatch) => {
//     dispatch(fetchUsers());
//     try {
//         const data = await UsersService.getUsers();
//         dispatch(fetchUsersSucceeded(data));
//     } catch (error) {
//         dispatch(fetchUsersFailed(error.message));
//     }
// };

export const fetchUsersAsync = createAsyncThunk("users/fetchUsers", async (_, thunkApi) => {
    try {
        return await UsersService.getUsers();
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})