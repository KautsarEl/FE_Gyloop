import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-specification-profile";

const initialState = {
  specification_profile: [],
  selectedSpecificationProfiles: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getSpecificationProfiles = createAsyncThunk(
  "configSpecificationProfile/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getSpecificationProfileById = createAsyncThunk(
  "configSpecificationProfile/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addSpecificationProfile = createAsyncThunk(
  "configSpecificationProfile/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editSpecificationProfile = createAsyncThunk(
  "configSpecificationProfile/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeSpecificationProfile = createAsyncThunk(
  "configSpecificationProfile/delete",
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
const configSpecificationProfileSlice = createSlice({
  name: "configSpecificationProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getSpecificationProfileById.pending, (state) => {
        state.loading = true;
        state.selectedSpecificationProfiles = null;
      })
      .addCase(getSpecificationProfileById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedSpecificationProfiles = action.payload;
      })
      .addCase(getSpecificationProfileById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getSpecificationProfiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSpecificationProfiles.fulfilled, (state, action) => {
        state.loading = false;
        state.specification_profile = action.payload;
      })
      .addCase(getSpecificationProfiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addSpecificationProfile.fulfilled, (state, action) => {
        state.specification_profile.push(action.payload);
      })

      // Update
      .addCase(editSpecificationProfile.fulfilled, (state, action) => {
        const index = state.specification_profile.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.specification_profile[index] = action.payload;
      })

      // Delete
      .addCase(removeSpecificationProfile.fulfilled, (state, action) => {
        state.specification_profile = state.specification_profile.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configSpecificationProfileSlice.reducer;
