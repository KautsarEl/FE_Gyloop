import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch data dari backend
export const fetchSytemConfig = createAsyncThunk("systemConfig/fetchSystemConfig", async () => {
  const response = await axios.get("http://localhost:8080/configs");
  return response.data.data; // Sesuai dengan format response backend
});
const sytemConfigSlice = createSlice({
  name: "configs",
  initialState: {
    data: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSytemConfig.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSytemConfig.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSytemConfig.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default sytemConfigSlice.reducer