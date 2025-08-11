import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-variant-profile";

const initialState = {
  variant_profile: [],
  selectedVariantProfiles: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getVariantProfiles = createAsyncThunk(
  "configVariantProfile/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getVariantProfileById = createAsyncThunk(
  "configVariantProfile/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addVariantProfile = createAsyncThunk(
  "configVariantProfile/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editVariantProfile = createAsyncThunk(
  "configVariantProfile/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeVariantProfile = createAsyncThunk(
  "configVariantProfile/delete",
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
const configVariantProfileSlice = createSlice({
  name: "configVariantProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getVariantProfileById.pending, (state) => {
        state.loading = true;
        state.selectedVariantProfiles = null;
      })
      .addCase(getVariantProfileById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedVariantProfiles = action.payload;
      })
      .addCase(getVariantProfileById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getVariantProfiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVariantProfiles.fulfilled, (state, action) => {
        state.loading = false;
        state.variant_profile = action.payload;
      })
      .addCase(getVariantProfiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addVariantProfile.fulfilled, (state, action) => {
        state.variant_profile.push(action.payload);
      })

      // Update
      .addCase(editVariantProfile.fulfilled, (state, action) => {
        const index = state.variant_profile.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.variant_profile[index] = action.payload;
      })

      // Delete
      .addCase(removeVariantProfile.fulfilled, (state, action) => {
        state.variant_profile = state.variant_profile.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configVariantProfileSlice.reducer;
