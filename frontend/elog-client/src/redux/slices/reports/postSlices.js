import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../../utils/baseUrl";

export const createPostAction = createAsyncThunk(
  "api/posts",
  async (post, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.users;
    const { usersAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${usersAuth.token}`,
      },
    };
    try {
      const { data } = await axios.post(`${baseURL}/api/posts`, post, config);
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//slice

const postSlice = createSlice({
  name: "post",
  initialState: { post: 20 },
  extraReducers: (builder) => {
    builder.addCase(createPostAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createPostAction.fulfilled, (state, action) => {
      state.loading = false;
      state.postCreated = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(createPostAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default postSlice.reducer;
