import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: 0,
};

export const ThemeSlice = createSlice({
   name: "themeSlice",
   initialState,
   reducers: {}
});

export const { } = ThemeSlice.actions;
export default ThemeSlice.reducer;