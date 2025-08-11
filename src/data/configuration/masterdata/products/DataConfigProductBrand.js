import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-product-brand";

const initialState = {
  product_brand: [],
  selectedProductBrand: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getProductBrands = createAsyncThunk(
  "configProductBrand/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getProductBrandById = createAsyncThunk(
  "configProductBrand/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addProductBrand = createAsyncThunk(
  "configProductBrand/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editProductBrand = createAsyncThunk(
  "configProductBrand/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeProductBrand = createAsyncThunk(
  "configProductBrand/delete",
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
const configProductBrandlice = createSlice({
  name: "configProductBrand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getProductBrandById.pending, (state) => {
        state.loading = true;
        state.selectedProductBrand = null;
      })
      .addCase(getProductBrandById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProductBrand = action.payload;
      })
      .addCase(getProductBrandById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getProductBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.product_brand = action.payload;
      })
      .addCase(getProductBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addProductBrand.fulfilled, (state, action) => {
        state.product_brand.push(action.payload);
      })

      // Update
      .addCase(editProductBrand.fulfilled, (state, action) => {
        const index = state.product_brand.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.product_brand[index] = action.payload;
      })

      // Delete
      .addCase(removeProductBrand.fulfilled, (state, action) => {
        state.product_brand = state.product_brand.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configProductBrandlice.reducer;
