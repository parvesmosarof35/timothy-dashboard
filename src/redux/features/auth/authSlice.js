import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { jwtDecode } from "jwt-decode";

const initialState = {
  token: null,
  refreshToken: null,
  userId: null,
  user: null,
  loading: false,
  error: null,
};

// Login user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      return response.data.data; // { accessToken, refreshToken }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

// Get user profile (after login)
export const getUserProfile = createAsyncThunk(
  "auth/getUserProfile",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/users/my-profile");
      console.log(response);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch user profile");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
      state.user = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { accessToken, refreshToken } = action.payload;
        const decoded = jwtDecode(accessToken);
        state.token = accessToken;
        state.refreshToken = refreshToken;
        state.userId = decoded.id;
        state.loading = false;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ;
      })

      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
