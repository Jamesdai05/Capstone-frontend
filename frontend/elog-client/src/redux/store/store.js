import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users/usersSlices";
import postReducer from "../slices/reports/postSlices";

const store = configureStore({
  reducer: {
    users: usersReducer,
    post: postReducer,
  },
});

export default store;
