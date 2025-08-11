// Table ID : events.header.int
// Short Description : Events Header
// Type : Internal Table
// Notes: N/A
const events_header_table = [
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

// Table ID : events.item.int
// Short Description : Events Item
// Type : Internal Table
// Notes: N/A
const events_item_table = [
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
    events_header_table,
    events_item_table
}
