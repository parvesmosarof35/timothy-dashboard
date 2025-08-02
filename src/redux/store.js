import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import authReducer from "./features/auth/authSlice";
import adminReducer from "./features/admin/adminSlice";
import getAllUsersReducer from "./features/user/getAllUsersSlice";
import getAllPartnersReducer from "./features/user/getPartnersSlice";
import singleUserReducer from "./features/user/getSIngleUserSlice";
// import { userApi } from './api/userApi'; // if using RTK Query

export const store = configureStore({
  reducer: {
     singleUser: singleUserReducer,
    user: userReducer,
    auth: authReducer,
    admin: adminReducer,
    getAllUsers: getAllUsersReducer,
    getAllPartners: getAllPartnersReducer,
    // [userApi.reducerPath]: userApi.reducer, // if using RTK Query
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // .concat(userApi.middleware), // if using RTK Query
});
