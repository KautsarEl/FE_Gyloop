import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-variant-profile-item";

const initialState = {
  variant_profile_item: [],
  selectedVariantProfileItems: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getVariantProfileItems = createAsyncThunk(
  "configVariantProfileItem/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getVariantProfileItemById = createAsyncThunk(
  "configVariantProfileItem/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addVariantProfileItem = createAsyncThunk(
  "configVariantProfileItem/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editVariantProfileItem = createAsyncThunk(
  "configVariantProfileItem/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeVariantProfileItem = createAsyncThunk(
  "configVariantProfileItem/delete",
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
const configVariantProfileItemSlice = createSlice({
  name: "configVariantProfileItem",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getVariantProfileItemById.pending, (state) => {
        state.loading = true;
        state.selectedVariantProfileItems = null;
      })
      .addCase(getVariantProfileItemById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedVariantProfileItems = action.payload;
      })
      .addCase(getVariantProfileItemById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getVariantProfileItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVariantProfileItems.fulfilled, (state, action) => {
        state.loading = false;
        state.variant_profile_item = action.payload;
      })
      .addCase(getVariantProfileItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addVariantProfileItem.fulfilled, (state, action) => {
        state.variant_profile_item.push(action.payload);
      })

      // Update
      .addCase(editVariantProfileItem.fulfilled, (state, action) => {
        const index = state.variant_profile_item.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.variant_profile_item[index] = action.payload;
      })

      // Delete
      .addCase(removeVariantProfileItem.fulfilled, (state, action) => {
        state.variant_profile_item = state.variant_profile_item.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configVariantProfileItemSlice.reducer;
