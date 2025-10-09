import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userName: string;
}

const initialState: UserState = {
  userName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { setName } = userSlice.actions;

export default userSlice.reducer;
