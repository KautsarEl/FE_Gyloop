import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-product-series";

const initialState = {
  product_series: [],
  selectedProductSeries: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getProductSeriess = createAsyncThunk(
  "configProductSeries/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getProductSeriesById = createAsyncThunk(
  "configProductSeries/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addProductSeries = createAsyncThunk(
  "configProductSeries/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editProductSeries = createAsyncThunk(
  "configProductSeries/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeProductSeries = createAsyncThunk(
  "configProductSeries/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Slice
const configProductSeriesSlice = createSlice({
  name: "configProductSeries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getProductSeriesById.pending, (state) => {
        state.loading = true;
        state.selectedProductSeries = null;
      })
      .addCase(getProductSeriesById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProductSeries = action.payload;
      })
      .addCase(getProductSeriesById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getProductSeriess.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductSeriess.fulfilled, (state, action) => {
        state.loading = false;
        state.product_series = action.payload;
      })
      .addCase(getProductSeriess.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addProductSeries.fulfilled, (state, action) => {
        state.product_series.push(action.payload);
      })

      // Update
      .addCase(editProductSeries.fulfilled, (state, action) => {
        const index = state.product_series.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.product_series[index] = action.payload;
      })

      // Delete
      .addCase(removeProductSeries.fulfilled, (state, action) => {
        state.product_series = state.product_series.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configProductSeriesSlice.reducer;
