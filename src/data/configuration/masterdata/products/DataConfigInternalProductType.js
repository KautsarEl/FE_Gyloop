import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-internal-product-type";

const initialState = {
  internal_product_type: [],
  selectedInternalProductType: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getInternalProductTypes = createAsyncThunk(
  "configInternalProductType/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getInternalProductTypeById = createAsyncThunk(
  "configInternalProductType/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addInternalProductType = createAsyncThunk(
  "configInternalProductType/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editInternalProductType = createAsyncThunk(
  "configInternalProductType/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeInternalProductType = createAsyncThunk(
  "configInternalProductType/delete",
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
const configInternalProductTypeSlice = createSlice({
  name: "configInternalProductType",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getInternalProductTypeById.pending, (state) => {
        state.loading = true;
        state.selectedInternalProductType = null;
      })
      .addCase(getInternalProductTypeById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedInternalProductType = action.payload;
      })
      .addCase(getInternalProductTypeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getInternalProductTypes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInternalProductTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.internal_product_type = action.payload;
      })
      .addCase(getInternalProductTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addInternalProductType.fulfilled, (state, action) => {
        state.internal_product_type.push(action.payload);
      })

      // Update
      .addCase(editInternalProductType.fulfilled, (state, action) => {
        const index = state.internal_product_type.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.internal_product_type[index] = action.payload;
      })

      // Delete
      .addCase(removeInternalProductType.fulfilled, (state, action) => {
        state.internal_product_type = state.internal_product_type.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configInternalProductTypeSlice.reducer;
