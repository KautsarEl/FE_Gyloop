import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-special-indicator";

const initialState = {
  special_indicator: [],
  selectedSpecialIndicator: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getSpecialIndicators = createAsyncThunk(
  "configSpecialIndicator/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getSpecialIndicatorById = createAsyncThunk(
  "configSpecialIndicator/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addSpecialIndicator = createAsyncThunk(
  "configSpecialIndicator/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editSpecialIndicator = createAsyncThunk(
  "configSpecialIndicator/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeSpecialIndicator = createAsyncThunk(
  "configSpecialIndicator/delete",
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
const configSpecialIndicatorSlice = createSlice({
  name: "configSpecialIndicator",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getSpecialIndicatorById.pending, (state) => {
        state.loading = true;
        state.selectedSpecialIndicator = null;
      })
      .addCase(getSpecialIndicatorById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedSpecialIndicator = action.payload;
      })
      .addCase(getSpecialIndicatorById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getSpecialIndicators.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSpecialIndicators.fulfilled, (state, action) => {
        state.loading = false;
        state.special_indicator = action.payload;
      })
      .addCase(getSpecialIndicators.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addSpecialIndicator.fulfilled, (state, action) => {
        state.special_indicator.push(action.payload);
      })

      // Update
      .addCase(editSpecialIndicator.fulfilled, (state, action) => {
        const index = state.special_indicator.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.special_indicator[index] = action.payload;
      })

      // Delete
      .addCase(removeSpecialIndicator.fulfilled, (state, action) => {
        state.special_indicator = state.special_indicator.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configSpecialIndicatorSlice.reducer;
