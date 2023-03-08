import { createSlice } from "@reduxjs/toolkit";

export const Settings = createSlice({
  name: "Settings",
  initialState: {
    themeColor: 'Light'
  },
  reducers: {
    changeTheme: (state, action) => {
      state.themeColor = action.payload;
    },
  },
});

export const { changeTheme } = Settings.actions;
export default Settings.reducer;
