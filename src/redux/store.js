import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import authReducer from "./features/auth/authSlice";
import adminReducer from "./features/admin/adminSlice";
// import { userApi } from './api/userApi'; // if using RTK Query

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    admin: adminReducer,
    // [userApi.reducerPath]: userApi.reducer, // if using RTK Query
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // .concat(userApi.middleware), // if using RTK Query
});
