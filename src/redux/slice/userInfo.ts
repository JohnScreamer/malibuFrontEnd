import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../../types/pages/homePage.type.js";
import { User } from "../../types/user.type..js";

export interface userInfoState {
    isAuth: boolean;
    userData: User | null;
    isLoading: boolean;
}

const initialState: userInfoState = {
    isAuth: false,
    userData: null,
    isLoading: false,
};

export const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<User>) => {
            state.userData = action.payload;
            state.userData.favorite = state.userData?.favorite
                ? state.userData.favorite
                : [];
            state.isAuth = true;
        },
        logOut: (state) => {
            state.userData = null;
            state.isAuth = false;
        },
        setUserLoadingStatus: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setFavoriteData: (state, action: PayloadAction<Array<ProductData>>) => {
            if (state.userData?.favorite)
                state.userData.favorite = action.payload;
        },
    },
});

export const { logIn, logOut, setUserLoadingStatus, setFavoriteData } =
    userInfoSlice.actions;

export default userInfoSlice.reducer;
