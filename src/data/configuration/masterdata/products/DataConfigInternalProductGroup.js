import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-internal-product-group";

const initialState = {
  internal_product_group: [],
  selectedInternalProductGroup: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getInternalProductGroups = createAsyncThunk(
  "configInternalProductGroup/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getInternalProductGroupById = createAsyncThunk(
  "configInternalProductGroup/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addInternalProductGroup = createAsyncThunk(
  "configInternalProductGroup/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editInternalProductGroup = createAsyncThunk(
  "configInternalProductGroup/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeInternalProductGroup = createAsyncThunk(
  "configInternalProductGroup/delete",
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
const configInternalProductGroupSlice = createSlice({
  name: "configInternalProductGroup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getInternalProductGroupById.pending, (state) => {
        state.loading = true;
        state.selectedInternalProductGroup = null;
      })
      .addCase(getInternalProductGroupById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedInternalProductGroup = action.payload;
      })
      .addCase(getInternalProductGroupById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getInternalProductGroups.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInternalProductGroups.fulfilled, (state, action) => {
        state.loading = false;
        state.internal_product_group = action.payload;
      })
      .addCase(getInternalProductGroups.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addInternalProductGroup.fulfilled, (state, action) => {
        state.internal_product_group.push(action.payload);
      })

      // Update
      .addCase(editInternalProductGroup.fulfilled, (state, action) => {
        const index = state.internal_product_group.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.internal_product_group[index] = action.payload;
      })

      // Delete
      .addCase(removeInternalProductGroup.fulfilled, (state, action) => {
        state.internal_product_group = state.internal_product_group.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configInternalProductGroupSlice.reducer;
