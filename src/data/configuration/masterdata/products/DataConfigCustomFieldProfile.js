import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-custom-field-profile";

const initialState = {
  custom_field_profile: [],
  selectedCustomFieldProfiles: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getCustomFieldProfiles = createAsyncThunk(
  "configCustomFieldProfile/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getCustomFieldProfileById = createAsyncThunk(
  "configCustomFieldProfile/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addCustomFieldProfile = createAsyncThunk(
  "configCustomFieldProfile/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editCustomFieldProfile = createAsyncThunk(
  "configCustomFieldProfile/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeCustomFieldProfile = createAsyncThunk(
  "configCustomFieldProfile/delete",
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
const configCustomFieldProfileSlice = createSlice({
  name: "configCustomFieldProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getCustomFieldProfileById.pending, (state) => {
        state.loading = true;
        state.selectedCustomFieldProfiles = null;
      })
      .addCase(getCustomFieldProfileById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCustomFieldProfiles = action.payload;
      })
      .addCase(getCustomFieldProfileById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getCustomFieldProfiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCustomFieldProfiles.fulfilled, (state, action) => {
        state.loading = false;
        state.custom_field_profile = action.payload;
      })
      .addCase(getCustomFieldProfiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addCustomFieldProfile.fulfilled, (state, action) => {
        state.custom_field_profile.push(action.payload);
      })

      // Update
      .addCase(editCustomFieldProfile.fulfilled, (state, action) => {
        const index = state.custom_field_profile.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.custom_field_profile[index] = action.payload;
      })

      // Delete
      .addCase(removeCustomFieldProfile.fulfilled, (state, action) => {
        state.custom_field_profile = state.custom_field_profile.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configCustomFieldProfileSlice.reducer;
