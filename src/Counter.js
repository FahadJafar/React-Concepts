import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    name:null
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementbyAmount: (state, action) => {
      state.count += action.payload;
    },
    printName: (state, action) => {
        state.name = action.payload;
      },

    clearData:(state)=>{
        state.count=0
        state.name=null
      }
  },
});
export const { increment, incrementbyAmount,printName,clearData } = counterSlice.actions;
export default counterSlice.reducer;
