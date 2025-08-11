// Table ID : product.header
// Short Description : Product Header
// Type : Transparent Table
// Notes: Will use across Apps
const product_header = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data

    }
]

// Table ID : product.item 
// Short Description : Product Item
// Type : Transparent Table
// Notes: Will use across Apps
const product_item = [
    {

    }
]

// Table ID : product.specification.header 
// Short Description : Product Specification Header
// Type : Transparent Table
// Notes: Will use across Apps
const product_specification_header = [
    {

    }
]

// Table ID : product.specification.item 
// Short Description : Product Specification Item
// Type : Transparent Table
// Notes: Will use across Apps
const product_specification_item = [
    {

    }
]

// Table ID : product.variant.header 
// Short Description : Product Variant Header
// Type : Transparent Table
// Notes: Will use across Apps
const product_variant_header = [
    {

    }
]

// Table ID : product.variant.item 
// Short Description : Product Variant Item
// Type : Transparent Table
// Notes: Will use across Apps
const product_variant_item = [
    {

    }
]

// Table ID : product.substitution.header 
// Short Description : Product Substitution Header
// Type : Transparent Table
// Notes: Will use across Apps
const product_substitution_header = [
    {

    }
]

// Table ID : product.substitution.item 
// Short Description : Product Substitution Item
// Type : Transparent Table
// Notes: Will use across Apps
const product_substitution_item = [
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

export {
    product_specification_header,
    product_specification_item,
    product_variant_header,
    product_variant_item,
    product_substitution_header,
    product_substitution_item,
    logs_data_header,
    logs_data_item,
}