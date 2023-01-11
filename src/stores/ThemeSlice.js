import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   sideBarOpen: true,
   textStyle: "Roboto",
   textSize: 18,
   textColor: "text-black",
   backgroundColor: "bg-white",
};

export const ThemeSlice = createSlice({
   name: "themeSlice",
   initialState,
   reducers: {
      sideBarOpenClick: (state, action) => {
         state.sideBarOpen = action.payload;
      },
      updateTextStyle: (state, action) => {
         state.textStyle = action.payload;
      },
      textSizeIncrement: (state, action) => {
         if (state.textSize < 22)
            state.textSize += 1;
      },
      textSizeDecrement: (state, action) => {
         if (state.textSize > 12)
            state.textSize -= 1;
      },
      updateBackgroundColor: (state, action) => {
         state.backgroundColor = action.payload;
      },
      updateTextColor: (state, action) => {
         state.textColor = action.payload;
      },
   },
});

export const { sideBarOpenClick, updateTextStyle, textSizeIncrement, textSizeDecrement, updateBackgroundColor, updateTextColor } = ThemeSlice.actions;
export default ThemeSlice.reducer;