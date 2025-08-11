// Table ID : bom.header
// Short Description : Bom Header
// Type : Transparent Table

import Action from "../../../../components/dropdown/action"

// Notes: Will use across Apps
const bom_header = [
    {

    }
]

// Table ID : bom.item 
// Short Description : Bom Item
// Type : Transparent Table
// Notes: N/A
const bom_item = [
    {

    }
]

// Table ID : logs.data.header
// Short Description : Logs Data Header
// Type : Transparent Table
const logs_data_header = [
    {
        // Indexing
        indx: <Action display={"/apps/customers/masterdata/billofmaterials/salesbomdetail"} change={"/apps/customers/masterdata/billofmaterials/salesbomchange"} />, /*Index No*/
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
        indx: <Action display={"/apps/sales/masterdata/products/salesproductsdetail"} change={"/apps/sales/masterdata/products/salesproductschange"} /> /*Index No*/,
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

export {
    bom_header,
    bom_item,
    logs_data_header,
    logs_data_item,
}