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
        Authorization: `Bearer ${usersAuth?.token}`,
      },
    };
    try {
      console.log("abc");

      const formData = new FormData();
      formData.append("title", post?.title);
      formData.append("description", post?.description);
      formData.append("category", post?.category);
      formData.append("photo", post?.photo);
      
      console.log(formData,post)
      const data = await axios.post(`${baseURL}/api/posts`, formData, config);
      console.log("2");
      console.log(data);
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const updatePostAction = createAsyncThunk(
  "post/update",
  async (post, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.users;
    const { usersAuth } = user;
    //authentication
    const config = {
      headers: {
        Authorization: `Bearer ${usersAuth?.token}`,
      },
    };
    try {
      // console.log("abc");
      const data = await axios.put(
        `${baseURL}/api/posts/${post.id}`,
        post,
        config
      );
      // console.log("2");
      // console.log(data);
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//for post details
export const fetchPostDetailsAction = createAsyncThunk(
  "post/detail",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const data = await axios.get(`${baseURL}/api/posts/${id}`);
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {},
  extraReducers: (builder) => {
    //create
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
    //fetch post Details
    builder.addCase(fetchPostDetailsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPostDetailsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.postDetails = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchPostDetailsAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //update Report
  //   builder.addCase(updatePostAction.pending, (state, action) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(updatePostAction.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.postUpdated = action?.payload;
  //     state.appErr = undefined;
  //     state.serverErr = undefined;
  //   });
  //   builder.addCase(updatePostAction.rejected, (state, action) => {
  //     state.loading = false;
  //     state.appErr = action?.payload?.message;
  //     state.serverErr = action?.error?.message;
  //   });
  },
});

export default postSlice.reducer;
