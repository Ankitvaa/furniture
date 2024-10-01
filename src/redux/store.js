import { configureStore } from "@reduxjs/toolkit";
import furnitureReducer from "./fetchDataSlice";
export const store = configureStore({
    reducer: {
        furniture: furnitureReducer
    }
})