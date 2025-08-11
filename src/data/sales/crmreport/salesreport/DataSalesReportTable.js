// Table ID : crm.report.sales.header.int
// Short Description : CRM Sales Report Header
// Type : Internal Table
// Notes: N/A
const sales_report_header_table = [
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

// Table ID : crm.report.sales.item.int
// Short Description : CRM Sales Report Item
// Type : Internal Table
// Notes: N/A
const sales_report_item_table = [
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
    sales_report_header_table,
    sales_report_item_table
}
