import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { furnitureData } from "../data";

export const fetchingData = createAsyncThunk("fetch/data", async () => {
    return furnitureData; // Directly returning the data array
});

const initialState = {
    status: false,
    data: [],
    error: null,
    filterData: []
};

const fetchData = createSlice({
    name: "Fetching Data",
    initialState,
    reducers: {
        filterFurniture: (state, action) => {
            state.filterData = action.payload
            if (state.filterData === "All") {
                state.filterData = state.data
            }
            else {
                state.filterData = state.data.filter((item) => {
                    return (
                        item.category === action.payload
                    )
                })
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchingData.pending, (state) => {
                state.status = true;
                state.error = null;
            })
            .addCase(fetchingData.fulfilled, (state, action) => {
                state.status = false;
                state.data = action.payload;
            })
            .addCase(fetchingData.rejected, (state, action) => {
                state.status = false;
                state.error = action.error.message;
            });
    }
});

export const { filterFurniture } = fetchData.actions
export default fetchData.reducer;
