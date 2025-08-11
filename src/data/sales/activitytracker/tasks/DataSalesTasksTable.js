// Table ID : tasks.header.int
// Short Description : Tasks Header
// Type : Internal Table
// Notes: Tasks General will use for other apps (e.g.: SRM, WMS, etc)
const tasks_header_table = [
    {
        tabl_form: "DEFAULT", // Table Format
        vlue_fild: "indx", // Field Value
        name_fild: "Index No", // Field Name
        is_show: "NO" // Is Show?
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "idno_systm",
        name_fild: "System ID",
        is_show: "NO"
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "idno_tent",
        name_fild: "Tenant ID",
        is_show: "NO"
    },

]

// Table ID : tasks.item.int
// Short Description : Tasks Item
// Type : Internal Table
// Notes: Tasks General will use for other apps (e.g.: SRM, WMS, etc)
const tasks_item_table = [
    {
        tabl_form: "DEFAULT", // Table Format
        vlue_fild: "indx", // Field Value
        name_fild: "Index No", // Field Name
        is_show: "NO" // Is Show?
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "idno_systm",
        name_fild: "System ID",
        is_show: "NO"
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "idno_tent",
        name_fild: "Tenant ID",
        is_show: "NO"
    },

]

export {
    tasks_header_table,
    tasks_item_table
}
