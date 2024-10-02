import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { furnitureData } from "../data"; // Assuming this is where your furnitureData is from

// Async thunk to fetch furniture data
export const fetchingData = createAsyncThunk("fetch/data", async () => {
  return furnitureData;
});

const initialState = {
  status: false,
  data: [],
  error: null,
  filterData: [],
  furnitureInfo: [],
};

const fetchData = createSlice({
  name: "Fetching Data",
  initialState,
  reducers: {
    filterFurniture: (state, action) => {
      const category = action.payload.trim().toLowerCase();

      if (category === "all") {
        state.filterData = state.data;
      } else {
        state.filterData = state.data.filter((item) => {
          return (
            item.category.toLowerCase().replace(/\s+/g, "") ===
            category.replace(/\s+/g, "")
          );
        });
      }
    },

    furnitureDetail: (state, action) => {
      const fDetails = action.payload;
      state.furnitureInfo = state.data.find(
        (productInfo) => productInfo.id === fDetails
      );
    },
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
        state.filterData = action.payload;
      })
      .addCase(fetchingData.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
  },
});

export const { filterFurniture,furnitureDetail } = fetchData.actions;
export default fetchData.reducer;
