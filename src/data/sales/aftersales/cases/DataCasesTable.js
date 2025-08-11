// Table ID : cases.header.int
// Short Description : Cases Header
// Type : Internal Table
// Notes: Cases General will use for other apps (e.g.: SRM, WMS, etc)
const cases_header_table = [
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

// Table ID : cases.item.int
// Short Description : Cases Item
// Type : Internal Table
// Notes: Cases General will use for other apps (e.g.: SRM, WMS, etc)
const cases_item_table = [
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
    cases_header_table,
    cases_item_table
}
