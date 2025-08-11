import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch data dari backend
export const fetchProduct = createAsyncThunk(
  "masterdata/fetchProduct",
  async () => {
    const response = await axios.get(`http://203.175.11.244:8080/api/products`);
    return response.data; // Sesuai dengan format response backend
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
