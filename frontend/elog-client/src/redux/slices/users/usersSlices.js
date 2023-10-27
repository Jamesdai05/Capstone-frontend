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
      const { data } = await axios.post(
        `${baseURL}/auth/login`,
        userData,
        config
      );
      console.log(data);
      //save user in the localstorage
      localStorage.setItem("userInfo", JSON.stringify(data));
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

//get userInfo from local storge.
const userLoginFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const usersSlices = createSlice({
  name: "users",
  initialState: {
    usersAuth: userLoginFromStorage,
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

    // login action
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.usersAuth = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

// const initialState = {
//   userId: null,
// };

// export  const userReducer(state = initialState, action) {
//   switch (action.type) {
//     case "Change_user":
//       return {
//         ...state,
//         user: action.payload,
//       }
//     default:
//       return state
//   }
// }



export default usersSlices.reducer;
