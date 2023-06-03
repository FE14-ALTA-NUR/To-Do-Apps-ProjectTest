import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IdTaskState {
  value: number;
}

const initialState: IdTaskState = {
  value: 348734,
};

export const IdTaskSlice = createSlice({
  name: "idTask",
  initialState,
  reducers: {
    
    detailId(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    
  },
});

export const { detailId } = IdTaskSlice.actions;