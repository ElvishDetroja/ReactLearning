import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  points: 1,
};

export const incrementByAmount = createAction("account/incrementByAmount");

export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1;
    },
    decrement: (state) => {
      state.points -= 1;
    },
    incrementByAmount: (state, action) => {
      state.points += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      if (action.payload >= 100) state.points++;
    });
  },
});

export const { increment, decrement } = bonusSlice.actions;

export default bonusSlice.reducer;