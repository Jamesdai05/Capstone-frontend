import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registrationAction = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      // http call
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = await axios.post(
        "http://localhost:3002/auth/register",
        user,
        config
      );
      return data;
    } catch (error) {
      // if(!error && ! error.response)
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async(userData, { rejectWithValue, getState, dispatch })=>{
      // http call
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try{

        const data = await axios.post(
          "http://localhost:3002/auth/login",
          user,
          config
      );
      return data;
    } catch (error) {
      // if(!error && ! error.response)
      if (!error?.response) {
        throw error;
      }
  }
);

const usersSlices = createSlice({
  name: "users",
  initialState: {
    usersAuth: "login",
  },

  extraReducers: {
    [registrationAction.pending]: (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    },
    [registrationAction.fulfilled]: (state, action) => {
      state.registered = action.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    },

    [registrationAction.rejected]: (state, action) => {
      state.registered = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    },
  },
});

export default usersSlices.reducer;
