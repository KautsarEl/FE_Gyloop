import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch data dari backend
export const fetchCities = createAsyncThunk("locations/fetchCities", async () => {
  const response = await axios.get("http://localhost:8080/cities");
  return response.data.data; // Sesuai dengan format response backend
});

const citySlice = createSlice({
  name: "cities",
  initialState: {
    data: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default citySlice.reducer;
