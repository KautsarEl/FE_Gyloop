import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-product-category";

const initialState = {
  product_category: [],
  selectedProductCategory: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getProductCategorys = createAsyncThunk(
  "configProductCategory/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getProductCategoryById = createAsyncThunk(
  "configProductCategory/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addProductCategory = createAsyncThunk(
  "configProductCategory/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editProductCategory = createAsyncThunk(
  "configProductCategory/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeProductCategory = createAsyncThunk(
  "configProductCategory/delete",
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
const configProductCategorylice = createSlice({
  name: "configProductCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getProductCategoryById.pending, (state) => {
        state.loading = true;
        state.selectedProductCategory = null;
      })
      .addCase(getProductCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProductCategory = action.payload;
      })
      .addCase(getProductCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getProductCategorys.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductCategorys.fulfilled, (state, action) => {
        state.loading = false;
        state.product_category = action.payload;
      })
      .addCase(getProductCategorys.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addProductCategory.fulfilled, (state, action) => {
        state.product_category.push(action.payload);
      })

      // Update
      .addCase(editProductCategory.fulfilled, (state, action) => {
        const index = state.product_category.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.product_category[index] = action.payload;
      })

      // Delete
      .addCase(removeProductCategory.fulfilled, (state, action) => {
        state.product_category = state.product_category.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configProductCategorylice.reducer;
