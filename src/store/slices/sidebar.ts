import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
  isSidebarOpen: boolean;
  activeSidebarItem: string;
}

const initialState: SidebarState = {
  isSidebarOpen: true,
  activeSidebarItem: "Home",
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    SetIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
      console.log("state.isSidebarOpen", state.isSidebarOpen);
    },
    SetActiveSidebarItem: (state, action: PayloadAction<string>) => {
      state.activeSidebarItem = action.payload;
    },
  },
});

export const { SetIsSidebarOpen, SetActiveSidebarItem } = sidebarSlice.actions;
export default sidebarSlice.reducer;
