import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-product-class";

const initialState = {
  product_class: [],
  selectedProductClass: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getProductClasss = createAsyncThunk(
  "configProductClass/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getProductClassById = createAsyncThunk(
  "configProductClass/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addProductClass = createAsyncThunk(
  "configProductClass/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editProductClass = createAsyncThunk(
  "configProductClass/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeProductClass = createAsyncThunk(
  "configProductClass/delete",
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
const configProductClassSlice = createSlice({
  name: "configProductClass",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getProductClassById.pending, (state) => {
        state.loading = true;
        state.selectedProductClass = null;
      })
      .addCase(getProductClassById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProductClass = action.payload;
      })
      .addCase(getProductClassById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getProductClasss.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductClasss.fulfilled, (state, action) => {
        state.loading = false;
        state.product_class = action.payload;
      })
      .addCase(getProductClasss.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addProductClass.fulfilled, (state, action) => {
        state.product_class.push(action.payload);
      })

      // Update
      .addCase(editProductClass.fulfilled, (state, action) => {
        const index = state.product_class.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.product_class[index] = action.payload;
      })

      // Delete
      .addCase(removeProductClass.fulfilled, (state, action) => {
        state.product_class = state.product_class.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configProductClassSlice.reducer;
