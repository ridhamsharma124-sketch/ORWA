import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "../features/AdminSlice"

export const store = configureStore({
    reducer:{
        api:apiReducer
    }
});

export default store;
