import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../../utils/baseUrl";

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
      const data = await axios.post(`${baseURL}/auth/register`, user, config);
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
  async (userData, { rejectWithValue, getState, dispatch }) => {
    // http call
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const data = await axios.post(`${baseURL}/auth/login`, userData, config);
      localStorage.setItem("userInfo", JSON.stringify(userData));
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

const usersSlices = createSlice({
  name: "users",
  initialState: {
    usersAuth: "login",
  },

  extraReducers: (builder) => {
    builder.addCase(registrationAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(registrationAction.fulfilled, (state, action) => {
      state.loading = false;
      state.registered = action.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });

    builder.addCase(registrationAction.rejected, (state, action) => {
      state.registered = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default usersSlices.reducer;
