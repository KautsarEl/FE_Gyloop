
// const products_columns_table = [
//   {
//     tabl_form: "DEFAULT",
//     vlue_fild: "idno_prod",
//     name_fild: "Product ID",
//     is_show: "YES",
//   },
//   {
//     tabl_form: "DEFAULT",
//     vlue_fild: "fnam_imag",
//     name_fild: "Image",
//     is_show: "YES",
//   },
//   {
//     tabl_form: "DEFAULT",
//     vlue_fild: "desc_shrt",
//     name_fild: "Description",
//     is_show: "YES",
//   },
//   {
//     tabl_form: "DEFAULT",
//     vlue_fild: "idno_intr",
//     name_fild: "Internal Code",
//     is_show: "YES",
//   },
//   {
//     tabl_form: "DEFAULT",
//     vlue_fild: "type_prod",
//     name_fild: "Type",
//     is_show: "YES",
//   },
//   {
//     tabl_form: "DEFAULT",
//     vlue_fild: "grop_prod",
//     name_fild: "Group",
//     is_show: "YES",
//   },
//   {
//     tabl_form: "DEFAULT",
//     vlue_fild: "char_prod",
//     name_fild: "Characteristic",
//     is_show: "YES",
//   },
//   {
//     tabl_form: "DEFAULT",
//     vlue_fild: "prof_prod",
//     name_fild: "Product Profile",
//     is_show: "YES",
//   },
//   // {
//   //   tabl_form: "DEFAULT",
//   //   vlue_fild: "prfx_orgz",
//   //   name_fild: "UoM",
//   //   is_show: "YES",
//   // },
//   // {
//   //   tabl_form: "DEFAULT",
//   //   vlue_fild: "sufx_orgz",
//   //   name_fild: "Delivery",
//   //   is_show: "YES",
//   // },
//   // {
//   //   tabl_form: "DEFAULT",
//   //   vlue_fild: "code_orgz",
//   //   name_fild: "Product Profile",
//   //   is_show: "YES",
//   // },
//   {
//     tabl_form: "DEFAULT",
//     vlue_fild: "prod_bran",
//     name_fild: "Brand",
//     is_show: "YES",
//   },
//   {
//     tabl_form: "DEFAULT",
//     vlue_fild: "idno_mpnn",
//     name_fild: "MPN",
//     is_show: "YES",
//   },
//   {
//     tabl_form: "DEFAULT",
//     vlue_fild: "idno_artc",
//     name_fild: "Article Number",
//     is_show: "YES",
//   },
//   {
//     tabl_form: "DEFAULT",
//     vlue_fild: "code_xbar",
//     name_fild: "Barcode",
//     is_show: "YES",
//   },
//   {
//     tabl_form: "DEFAULT",
//     vlue_fild: "prod_tags",
//     name_fild: "Tags",
//     is_show: "YES",
//   },
//   {
//     tabl_form: "DEFAULT",
//     vlue_fild: "indx",
//     name_fild: "Index",
//     is_show: "YES",
//   },
// ];




// export {products_columns_table };
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://203.175.11.244:8080/items';

export const fetchLayoutItems = createAsyncThunk('items/fetchLayoutItems', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addItem = createAsyncThunk('items/addItem', async (item) => {
  const response = await axios.post(API_URL, item);
  return response.data;
});

export const updateItem = createAsyncThunk('items/updateItem', async (item) => {
  const response = await axios.put(`${API_URL}/${item.code_fild}`, item);
  return response.data;
});

export const deleteItem = createAsyncThunk('items/deleteItem', async (code_fild) => {
  await axios.delete(`${API_URL}/${code_fild}`);
  return code_fild;
});

const layoutItemSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLayoutItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLayoutItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchLayoutItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        const index = state.items.findIndex(i => i.code_fild === action.payload.code_fild);
        state.items[index] = action.payload;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter(i => i.code_fild !== action.payload);
      });
  }
});

export default layoutItemSlice.reducer;
