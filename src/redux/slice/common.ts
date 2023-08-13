import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface commonState {
    value: number;
    isCatalogOpen: boolean;
    isFiltersOpen: boolean;
}
const initialState: commonState = {
    value: 0,
    isCatalogOpen: false,
    isFiltersOpen: false,
};

export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        setCatalogStatus: (state, action: PayloadAction<boolean>) => {
            state.isCatalogOpen = action.payload;
        },
        toggleCatalogStatus: (state) => {
            state.isCatalogOpen = !state.isCatalogOpen;
        },
        setFiltersStatus: (state, action: PayloadAction<boolean>) => {
            state.isFiltersOpen = action.payload;
        },
        toggleFiltersStatus: (state) => {
            state.isFiltersOpen = !state.isFiltersOpen;
        },
    },
});

export const {
    setCatalogStatus,
    toggleCatalogStatus,
    setFiltersStatus,
    toggleFiltersStatus,
} = commonSlice.actions;

export default commonSlice.reducer;
