import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-product-group";

const initialState = {
  product_group: [],
  selectedProductGroup: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getProductGroups = createAsyncThunk(
  "configProductGroup/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getProductGroupById = createAsyncThunk(
  "configProductGroup/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addProductGroup = createAsyncThunk(
  "configProductGroup/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editProductGroup = createAsyncThunk(
  "configProductGroup/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeProductGroup = createAsyncThunk(
  "configProductGroup/delete",
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
const configProductGroupSlice = createSlice({
  name: "configProductGroup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getProductGroupById.pending, (state) => {
        state.loading = true;
        state.selectedProductGroup = null;
      })
      .addCase(getProductGroupById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProductGroup = action.payload;
      })
      .addCase(getProductGroupById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getProductGroups.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductGroups.fulfilled, (state, action) => {
        state.loading = false;
        state.product_group = action.payload;
      })
      .addCase(getProductGroups.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addProductGroup.fulfilled, (state, action) => {
        state.product_group.push(action.payload);
      })

      // Update
      .addCase(editProductGroup.fulfilled, (state, action) => {
        const index = state.product_group.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.product_group[index] = action.payload;
      })

      // Delete
      .addCase(removeProductGroup.fulfilled, (state, action) => {
        state.product_group = state.product_group.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configProductGroupSlice.reducer;
