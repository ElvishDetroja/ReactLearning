import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  elements: 11,
};

export const increment = createAction("reward/increment");
export const decrement = createAction("reward/decrement");

const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.elements++;
    })
    .addCase(decrement, (state, action) => {
      state.elements -= action.payload;
    });
});

export default rewardReducer;