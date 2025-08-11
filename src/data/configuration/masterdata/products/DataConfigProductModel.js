import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-product-model";

const initialState = {
  product_model: [],
  selectedProductModel: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getProductModels = createAsyncThunk(
  "configProductModel/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getProductModelById = createAsyncThunk(
  "configProductModel/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addProductModel = createAsyncThunk(
  "configProductModel/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editProductModel = createAsyncThunk(
  "configProductModel/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeProductModel = createAsyncThunk(
  "configProductModel/delete",
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
const configProductModelSlice = createSlice({
  name: "configProductModel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getProductModelById.pending, (state) => {
        state.loading = true;
        state.selectedProductModel = null;
      })
      .addCase(getProductModelById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProductModel = action.payload;
      })
      .addCase(getProductModelById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getProductModels.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductModels.fulfilled, (state, action) => {
        state.loading = false;
        state.product_model = action.payload;
      })
      .addCase(getProductModels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addProductModel.fulfilled, (state, action) => {
        state.product_model.push(action.payload);
      })

      // Update
      .addCase(editProductModel.fulfilled, (state, action) => {
        const index = state.product_model.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.product_model[index] = action.payload;
      })

      // Delete
      .addCase(removeProductModel.fulfilled, (state, action) => {
        state.product_model = state.product_model.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configProductModelSlice.reducer;
