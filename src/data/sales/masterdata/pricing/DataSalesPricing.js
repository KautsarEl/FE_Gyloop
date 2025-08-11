// Table ID : sales.pricing.header
// Short Description : Sales Pricing Header
// Type : Transparent Table
// Notes: N/A
const sales_pricing_header = [
    {

    }
]

// Table ID : sales.pricing.item 
// Short Description : Sales Pricing Item
// Type : Transparent Table
// Notes: N/A
const sales_pricing_item = [
    {

    }
]

// Table ID : logs.data.header
// Short Description : Logs Data Header
// Type : Transparent Table
const logs_data_header = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        numb_objt: "62887000142" /*Object Number*/,
        type_objt: "OrganizationID" /*Object Type*/,
        numb_logs: "ID918842101210090080070077142" /*Logs Number*/,
        name_tabl: "sales.activities.header"  /*Table Name*/,

        // Document Date
        type_tran: "Create" /*Transactions Type*/ /*Create, Update, Delete, Locked, Print, Share, etc*/,
        date_doct: "2 February 2025" /*Document Date (System)*/,
        date_docx: "2 February 2025" /*Document Date (User Time Zone)*/,
        time_doct: "18:00" /*Document Time (System)*/,
        time_docx: "15:00" /*Document Time (User Time Zone)*/,
        post_by: "Joko.Marwinto@petrosea.com" /*Posted By*/,
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        numb_objt: "62887000142" /*Object Number*/,
        type_objt: "OrganizationID" /*Object Type*/,
        numb_logs: "ID918842101210090080070077142" /*Logs Number*/,
        name_tabl: "sales.activities.item"  /*Table Name*/,

        // Document Date
        type_tran: "Create" /*Transactions Type*/ ,
        date_doct: "2 February 2025" /*Document Date (System)*/,
        date_docx: "2 February 2025" /*Document Date (User Time Zone)*/,
        time_doct: "18:00" /*Document Time (System)*/,
        time_docx: "15:00" /*Document Time (User Time Zone)*/,
        post_by: "Joko.Marwinto@petrosea.com" /*Posted By*/,
    },
]

// Table ID : logs.data.item
// Short Description : Logs Data Item
// Type : Transparent Table
const logs_data_item = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        numb_logs: "ID918842101210090080070077142" /*Logs Number*/,
        name_flld: "desc_shrt" /*Field Name*/,
        valu_oldd: "" /*Old Value*/,
        valu_neww: "Description" /*New Value*/,        
    },
]

const pricing_columns_table = [
  {
    tabl_form: "DEFAULT",
    vlue_fild: "indx",
    name_fild: "Index",
    is_show: "NO",
  },
  {
    tabl_form: "DEFAULT",
    vlue_fild: "idno_systm",
    name_fild: "System ID",
    is_show: "NO",
  },
  {
    tabl_form: "DEFAULT",
    vlue_fild: "idno_tent",
    name_fild: "Tenant ID",
    is_show: "NO",
  },
  {
    tabl_form: "DEFAULT",
    vlue_fild: "idno_orgz",
    name_fild: "Organization ID",
    is_show: "NO",
  },
  {
    tabl_form: "DEFAULT",
    vlue_fild: "type_orgz",
    name_fild: "Type",
    is_show: "NO",
  },
  {
    tabl_form: "DEFAULT",
    vlue_fild: "name_orgz",
    name_fild: "Name",
    is_show: "NO",
  },
  {
    tabl_form: "DEFAULT",
    vlue_fild: "legl_orgz",
    name_fild: "Legal Entity",
    is_show: "NO",
  },
  {
    tabl_form: "DEFAULT",
    vlue_fild: "prfx_orgz",
    name_fild: "Prefix",
    is_show: "NO",
  },
  {
    tabl_form: "DEFAULT",
    vlue_fild: "sufx_orgz",
    name_fild: "Suffix",
    is_show: "NO",
  },
  {
    tabl_form: "DEFAULT",
    vlue_fild: "code_orgz",
    name_fild: "Code",
    is_show: "NO",
  },
  {
    tabl_form: "DEFAULT",
    vlue_fild: "legl_base",
    name_fild: "Base Legal Entity",
    is_show: "NO",
  },
  {
    tabl_form: "DEFAULT",
    vlue_fild: "code_sect",
    name_fild: "Section Code",
    is_show: "NO",
  },
  {
    tabl_form: "DEFAULT",
    vlue_fild: "name_sect",
    name_fild: "Section Name",
    is_show: "NO",
  },
  {
    tabl_form: "DEFAULT",
    vlue_fild: "code_indg",
    name_fild: "Industry Code",
    is_show: "NO",
  },
  {
    tabl_form: "DEFAULT",
    vlue_fild: "name_indg",
    name_fild: "Industry Name",
    is_show: "NO",
  },
];

export {
    sales_pricing_header,
    sales_pricing_item,
    logs_data_header,
    logs_data_item,
    pricing_columns_table,
}