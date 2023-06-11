import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 10,
};

export const fetchUserById = createAsyncThunk(
  "user",
  async (userId, thunkAPI) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return data;
  }
);


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.pending = false;
        state.data = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = "rejected";
        state.pending = false;
      })
      .addCase(fetchUserById.pending, (state, action) => {
        state.status = "pending";
        state.pending = true;
        state.error = action.error;
      });
  },
});

export default userSlice.reducer;