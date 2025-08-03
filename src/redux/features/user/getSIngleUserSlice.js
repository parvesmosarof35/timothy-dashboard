// src/features/user/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

// Async thunk for getting a single user
export const getSingleUser = createAsyncThunk(
  "singleUser/getSingleUser", // ✅ consistent slice name
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`/users/${id}`);
      //   console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Something went wrong"
      );
    }
  }
);

// Async thunk for deleting a single user
export const deleteSingleUser = createAsyncThunk(
  "singleUser/deleteSingleUser",
  async (id, thunkAPI) => {
    try {
      const response = await api.delete(`/users/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Something went wrong"
      );
    }
  }
);

const initialState = {
  singleUser: null,
  loading: false,
  error: null,
};

const singleUserSlice = createSlice({
  name: "singleUser", // ✅ name matches slice in store
  initialState,
  reducers: {
    resetUserState: (state) => {
      state.singleUser = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.loading = false;
        state.singleUser = action.payload;
      })
      .addCase(getSingleUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ handle deleteSingleUser thunk
      .addCase(deleteSingleUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSingleUser.fulfilled, (state) => {
        state.loading = false;
        state.singleUser = null; // user is deleted
      })
      .addCase(deleteSingleUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetUserState } = singleUserSlice.actions;
export default singleUserSlice.reducer;
