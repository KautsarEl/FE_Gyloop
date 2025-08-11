import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-product-type";

const initialState = {
  product_type: [],
  selectedProductType: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getProductTypes = createAsyncThunk(
  "configProductType/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getProductTypeById = createAsyncThunk(
  "configProductType/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addProductType = createAsyncThunk(
  "configProductType/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editProductType = createAsyncThunk(
  "configProductType/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeProductType = createAsyncThunk(
  "configProductType/delete",
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
const configProductTypeSlice = createSlice({
  name: "configProductType",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getProductTypeById.pending, (state) => {
        state.loading = true;
        state.selectedProductType = null;
      })
      .addCase(getProductTypeById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProductType = action.payload;
      })
      .addCase(getProductTypeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getProductTypes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.product_type = action.payload;
      })
      .addCase(getProductTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addProductType.fulfilled, (state, action) => {
        state.product_type.push(action.payload);
      })

      // Update
      .addCase(editProductType.fulfilled, (state, action) => {
        const index = state.product_type.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.product_type[index] = action.payload;
      })

      // Delete
      .addCase(removeProductType.fulfilled, (state, action) => {
        state.product_type = state.product_type.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configProductTypeSlice.reducer;
