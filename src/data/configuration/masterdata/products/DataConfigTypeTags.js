import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-type-tag";

const initialState = {
  type_tags: [],
  selectedTypeTags: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getTypeTags = createAsyncThunk(
  "configTypeTag/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getTypeTagById = createAsyncThunk(
  "configTypeTag/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addTypeTag = createAsyncThunk(
  "configTypeTag/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editTypeTag = createAsyncThunk(
  "configTypeTag/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeTypeTag = createAsyncThunk(
  "configTypeTag/delete",
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
const configTypeTagSlice = createSlice({
  name: "configTypeTag",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getTypeTagById.pending, (state) => {
        state.loading = true;
        state.selectedTypeTags = null;
      })
      .addCase(getTypeTagById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedTypeTags = action.payload;
      })
      .addCase(getTypeTagById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getTypeTags.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTypeTags.fulfilled, (state, action) => {
        state.loading = false;
        state.type_tags = action.payload;
      })
      .addCase(getTypeTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addTypeTag.fulfilled, (state, action) => {
        state.type_tags.push(action.payload);
      })

      // Update
      .addCase(editTypeTag.fulfilled, (state, action) => {
        const index = state.type_tags.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.type_tags[index] = action.payload;
      })

      // Delete
      .addCase(removeTypeTag.fulfilled, (state, action) => {
        state.type_tags = state.type_tags.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configTypeTagSlice.reducer;
