import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import authReducer from "./features/auth/authSlice";
import adminReducer from "./features/admin/adminSlice";
import getAllUsersReducer from "./features/user/getAllUsersSlice";
import getAllPartnersReducer from "./features/user/getPartnersSlice";
import singleUserReducer from "./features/user/getSIngleUserSlice";
import { statisticsApi } from './api/statistics/getOverviewApi';
import { paymentUserAnalysisApi } from './api/statistics/paymentAndUserAnalisys';
import { cancelRefundApi } from './api/statistics/cancelRefundApi';
import { termsConditionsApi } from './api/termsConditions/termsConditionsApi';
import { privacyPolicyApi } from './api/privacyPolicy/privacyPolicyApi';
import { financesApi } from './api/finances/financesApi';
import { promoCodesApi } from './api/promoCodes/promoCodesApi';
import { userApi } from './api/userApi';
import { channelsApi } from './api/chat/getChannelsByIdApi';
import { messagesApi } from './api/chat/getAllMSGApi';
import { adminChannelsApi } from './api/chat/getAllChannelsForAdminApi';

export const store = configureStore({
  reducer: {
     singleUser: singleUserReducer,
    user: userReducer,
    auth: authReducer,
    admin: adminReducer,
    getAllUsers: getAllUsersReducer,
    getAllPartners: getAllPartnersReducer,
    [statisticsApi.reducerPath]: statisticsApi.reducer,
    [paymentUserAnalysisApi.reducerPath]: paymentUserAnalysisApi.reducer,
    [cancelRefundApi.reducerPath]: cancelRefundApi.reducer,
    [termsConditionsApi.reducerPath]: termsConditionsApi.reducer,
    [privacyPolicyApi.reducerPath]: privacyPolicyApi.reducer,
    [financesApi.reducerPath]: financesApi.reducer,
    [promoCodesApi.reducerPath]: promoCodesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [channelsApi.reducerPath]: channelsApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
    [adminChannelsApi.reducerPath]: adminChannelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(statisticsApi.middleware)
      .concat(paymentUserAnalysisApi.middleware)
      .concat(cancelRefundApi.middleware)
      .concat(termsConditionsApi.middleware)
      .concat(privacyPolicyApi.middleware)
      .concat(financesApi.middleware)
      .concat(promoCodesApi.middleware)
      .concat(userApi.middleware)
      .concat(channelsApi.middleware)
      .concat(messagesApi.middleware)
      .concat(adminChannelsApi.middleware),
});
