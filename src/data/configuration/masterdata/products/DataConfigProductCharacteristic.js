import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://203.175.11.244:8080/config-product-characteristic";

const initialState = {
  product_characteristic: [],
  selectedProductCharacteristic: null, // Tambahan untuk detail per ID
  loading: false,
  error: null,
};

// Async thunks langsung pakai axios
export const getProductCharacteristics = createAsyncThunk(
  "configProductCharacteristic/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getProductCharacteristicById = createAsyncThunk(
  "configProductCharacteristic/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addProductCharacteristic = createAsyncThunk(
  "configProductCharacteristic/add",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const editProductCharacteristic = createAsyncThunk(
  "configProductCharacteristic/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeProductCharacteristic = createAsyncThunk(
  "configProductCharacteristic/delete",
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
const configProductCharacteristiclice = createSlice({
  name: "configProductCharacteristic",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get By ID
      .addCase(getProductCharacteristicById.pending, (state) => {
        state.loading = true;
        state.selectedProductCharacteristic = null;
      })
      .addCase(getProductCharacteristicById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProductCharacteristic = action.payload;
      })
      .addCase(getProductCharacteristicById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(getProductCharacteristics.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductCharacteristics.fulfilled, (state, action) => {
        state.loading = false;
        state.product_characteristic = action.payload;
      })
      .addCase(getProductCharacteristics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addProductCharacteristic.fulfilled, (state, action) => {
        state.product_characteristic.push(action.payload);
      })

      // Update
      .addCase(editProductCharacteristic.fulfilled, (state, action) => {
        const index = state.product_characteristic.findIndex(
          (item) => item.indx === action.payload.indx
        );
        if (index !== -1) state.product_characteristic[index] = action.payload;
      })

      // Delete
      .addCase(removeProductCharacteristic.fulfilled, (state, action) => {
        state.product_characteristic = state.product_characteristic.filter(
          (item) => item.indx !== action.payload
        );
      });
  },
});

export default configProductCharacteristiclice.reducer;
