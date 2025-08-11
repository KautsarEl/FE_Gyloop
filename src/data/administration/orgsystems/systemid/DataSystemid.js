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
// Get Current System ID
const currentIdno_Systm = "APAC001998242"
const currentSorc_Depl = "PTR-DEV"


// Table : systemid_config
const systemid_config = [
  {
    idno_systm: "APAC001998242",
    idno_tent: "ID9188421012",
    name_tent: "Peterosea",
    type_sytm: "Production",
    name_sytm: "PTR-PRD",
    addr_sytm: "https://www.gyloop.com/petrosea/prd",
    ip_sytm: "192.1.221.242",
    is_deft: "Yes",
    is_mstr: "No",
    sorc_depl: "PTR-DEV",
    date_regs: "2 February 2025",
    date_regx: "2 February 2025",
    time_regs: "18:00",
    time_regx: "15:00",
    // idno_sadm: "Joko.Marwinto@petrosea.com",
    sytm_sint: "Active",
    idno_skus: "SKK91824",
    idno_lcsn: "77KLA0998772KJPO0881ZZSKK8812J2",
    type_lcsn: "Server-Enterprise-Pro",
    
    
    //General log data (please copy to all data)
    numb_objt: "APAC001998242",
    type_objt: "SystemID", 
    is_appr : "",
    appr_numb : "",
    is_fapp  :  "",
    is_inac : "",
    inac_by  : "",
    is_lock : "",
    lock_by : "",
    is_dele : "",
    dele_by : "",
    numb_logs: "ID918842101210090080070061242",
    date_crdt : "2 February 2025",
    date_crdx : "2 February 2025",
    time_crdt : "18:00",
    time_crdx  : "15:00",
    crdt_by: "Joko.Marwinto@petrosea.com",
    sytm_sint: "Active",
    date_updt : "2 February 2025",
    date_updx : "2 February 2025",
    time_updt : "18:00",
    time_updx : "15:00",
    updt_by : "Joko.Marwinto@petrosea.com",
  },
  {
    idno_systm: "APAC001998741",
    idno_tent: "ID9188421012",
    name_tent: "Peterosea",
    type_sytm: "Testing",
    name_sytm: "PTR-TES",
    addr_sytm: "https://www.gyloop.com/petrosea/tes",
    ip_sytm: "192.1.221.244",
    is_deft: "No",
    is_mstr: "No",
    sorc_depl: "PTR-DEV",
    date_regs: "18 February 2025",
    date_regx: "18 February 2025",
    time_regs: "14:35",
    time_regx: "11:35",
    // idno_sadm: "Joko.Marwinto@petrosea.com",
    sytm_sint: "Active",
    idno_skus: "SKK91001",
    idno_lcsn: "77KLA0998772KJPO0881ZZS888192J2",
    type_lcsn: "Server-Compact",

    //General log data (please copy to all data)
    numb_objt: "APAC001998741",
    type_objt: "SystemID", 
    is_appr : "",
    appr_numb : "",
    is_fapp  :  "",
    is_inac : "",
    inac_by  : "",
    is_lock : "",
    lock_by : "",
    is_dele : "",
    dele_by : "",
    numb_logs: "ID918842101210090080070061242",
    date_crdt : "2 February 2025",
    date_crdx : "2 February 2025",
    time_crdt : "18:00",
    time_crdx  : "15:00",
    crdt_by: "Joko.Marwinto@petrosea.com",
    date_updt : "",
    date_updx : "",
    time_updt : "",
    time_updx : "",
    updt_by : "",
  },
  {
    idno_systm: "APAC001998739",
    idno_tent: "ID9188421012",
    name_tent: "Peterosea",
    type_sytm: "Development",
    name_sytm: "PTR-DEV",
    addr_sytm: "https://www.gyloop.com/petrosea/dev",
    ip_sytm: "192.1.221.243",
    is_deft: "No",
    is_mstr: "Yes",
    sorc_depl: "N/A",
    date_regs: "18 February 2025",
    date_regx: "18 February 2025",
    time_regs: "14:21",
    time_regx: "11:21",
    // idno_sadm: "Joko.Marwinto@petrosea.com",
    idno_skus: "SKK91901",
    idno_lcsn: "77KLA0998772KJPO0881ZZS9KJH7614N",
    type_lcsn: "Server-Starter",
    
    //General log data (please copy to all data)
    numb_objt: "APAC001998739",
    type_objt: "SystemID",    
    is_appr : "",
    appr_numb : "",
    is_fapp  :  "",
    is_inac : "",
    inac_by  : "",
    is_lock : "",
    lock_by : "",
    is_dele : "",
    dele_by : "",
    numb_logs: "ID918842101210090080070061242",
    date_crdt : "2 February 2025",
    date_crdx : "2 February 2025",
    time_crdt : "18:00",
    time_crdx  : "15:00",
    crdt_by: "Joko.Marwinto@petrosea.com",
    date_updt : "",
    date_updx : "",
    time_updt : "",
    time_updx : "",
    updt_by : "",
    },
]


const dataTableSystemId = [
  {
    id_sytm: "SYTM0001",
    type_sytm: "Development",
    crdt_at: "02/12/2025",
    crdt_by: "Jhon Doe",
    urll_sytm: "-",
  },
  {
    id_sytm: "SYTM0002",
    type_sytm: "Testing",
    crdt_at: "02/12/2025",
    crdt_by: "Jhon Doe",
    urll_sytm: "-",
  },
  {
    id_sytm: "SYTM0003",
    type_sytm: "Production",
    crdt_at: "02/12/2025",
    crdt_by: "Jhon Doe",
    urll_sytm: "-",
  },
  {
    id_sytm: "SYTM0004",
    type_sytm: "Development",
    crdt_at: "02/12/2025",
    crdt_by: "Jhon Doe",
    urll_sytm: "-",
  },
  {
    id_sytm: "SYTM0005",
    type_sytm: "Testing",
    crdt_at: "02/12/2025",
    crdt_by: "Jhon Doe",
    urll_sytm: "-",
  },
  {
    id_sytm: "SYTM0006",
    type_sytm: "Production",
    crdt_at: "02/12/2025",
    crdt_by: "Jhon Doe",
    urll_sytm: "-",
  },
  {
    id_sytm: "SYTM0007",
    type_sytm: "Development",
    crdt_at: "02/12/2025",
    crdt_by: "Jhon Doe",
    urll_sytm: "-",
  },
  {
    id_sytm: "SYTM0008",
    type_sytm: "Testing",
    crdt_at: "02/12/2025",
    crdt_by: "Jhon Doe",
    urll_sytm: "-",
  },
  {
    id_sytm: "SYTM0009",
    type_sytm: "Production",
    crdt_at: "02/12/2025",
    crdt_by: "Jhon Doe",
    urll_sytm: "-",
  },
];
const dataTableSystemIdGrid = [
  [
    "SYTM0001",
    "Development",
    "02/12/2025",
    "Jhon Doe",
    "-",
  ],
  [
    "SYTM0002",
    "Testing",
    "02/12/2025",
    "Jhon Doe",
    "-",
  ],
  [
    "SYTM0003",
    "Production",
    "02/12/2025",
    "Jhon Doe",
    "-",
  ],
  [
    "SYTM0004",
    "Development",
    "02/12/2025",
    "Jhon Doe",
    "-",
  ],
  [
    "SYTM0005",
    "Testing",
    "02/12/2025",
    "Jhon Doe",
    "-",
  ],
  [
    "SYTM0006",
    "Production",
    "02/12/2025",
    "Jhon Doe",
    "-",
  ],
  [
    "SYTM0007",
    "Development",
    "02/12/2025",
    "Jhon Doe",
    "-",
  ],
  [
    "SYTM0008",
    "Testing",
    "02/12/2025",
    "Jhon Doe",
    "-",
  ],
  [
    "SYTM0009",
    "Production",
    "02/12/2025",
    "Jhon Doe",
    "-",
  ],
];

export { systemid_config, dataTableSystemId, dataTableSystemIdGrid, currentIdno_Systm, currentSorc_Depl, };
