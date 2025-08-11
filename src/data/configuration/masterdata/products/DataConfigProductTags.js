import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-product-tag";

const initialState = {
  product_tags: [],
  selectedProductTags: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getProductTags = createAsyncThunk(
  "configProductTag/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getProductTagById = createAsyncThunk(
  "configProductTag/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addProductTag = createAsyncThunk(
  "configProductTag/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editProductTag = createAsyncThunk(
  "configProductTag/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeProductTag = createAsyncThunk(
  "configProductTag/delete",
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
const configProductTagSlice = createSlice({
  name: "configProductTag",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getProductTagById.pending, (state) => {
        state.loading = true;
        state.selectedProductTags = null;
      })
      .addCase(getProductTagById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProductTags = action.payload;
      })
      .addCase(getProductTagById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getProductTags.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductTags.fulfilled, (state, action) => {
        state.loading = false;
        state.product_tags = action.payload;
      })
      .addCase(getProductTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addProductTag.fulfilled, (state, action) => {
        state.product_tags.push(action.payload);
      })

      // Update
      .addCase(editProductTag.fulfilled, (state, action) => {
        const index = state.product_tags.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.product_tags[index] = action.payload;
      })

      // Delete
      .addCase(removeProductTag.fulfilled, (state, action) => {
        state.product_tags = state.product_tags.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configProductTagSlice.reducer;
