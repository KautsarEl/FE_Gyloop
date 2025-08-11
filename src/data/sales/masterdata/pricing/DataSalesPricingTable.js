import { Link } from "react-router-dom";
import CustomPopover from "../../../../components/dropdown/custom-popover";
import Action from "../../../../components/dropdown/action";
import noImage from "../../../../assets/img/no-image.png";

// Table ID : sales.pricing.header.int
// Short Description : Sales Pricing Header
// Type : Internal Table
// Notes: N/A
const sales_pricing_header_table = [
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
];

// Table ID : sales.pricing.item.int
// Short Description : Sales Pricing Item
// Type : Internal Table
// Notes: N/A
const sales_pricing_item_table = [
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
];

const pricing_data_table = [
    {
        action: <Action display={"/apps/sales/masterdata/pricing/salespricingdetail"} change={"/apps/sales/masterdata/pricing/salespricingchange"} />,
        pricing_id: (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <Link
                    to="/apps/sales/masterdata/pricing/salespricingdetail"
                    style={{ fontWeight: "bold" }}
                >
                    PRC001-STD
                </Link>{" "}
                <CustomPopover />
            </div>
        ),
        image: <img width={70} src={noImage} alt="pricing_img" />,
        description: "Standard Pricing Schema",
        internal_code: "STD001",
        type: "Standard Pricing",
        group: "Sales Pricing",
        characteristic: "Regular Price",
        uom: "USD",
        validity: "2024-12-31",
        price_profile: "Standard",
        customer: "All Customers",
        region: "Global",
        price_level: "Retail",
        currency: "USD",
        status: "Active"
    },
    {
        action: <Action display={"/apps/sales/masterdata/pricing/salespricingdetail"} change={"/apps/sales/masterdata/pricing/salespricingchange"} />,
        pricing_id: (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <Link
                    to="/apps/sales/masterdata/pricing/salespricingdetail"
                    style={{ fontWeight: "bold" }}
                >
                    PRC002-SPL
                </Link>{" "}
                <CustomPopover />
            </div>
        ),
        image: <img width={70} src={noImage} alt="pricing_img" />,
        description: "Special Customer Pricing",
        internal_code: "SPL002",
        type: "Special Pricing",
        group: "Customer Pricing",
        characteristic: "Special Price",
        uom: "USD",
        validity: "2024-06-30",
        price_profile: "Special",
        customer: "VIP Customers",
        region: "Asia Pacific",
        price_level: "Wholesale",
        currency: "USD",
        status: "Active"
    }
];

// Table ID : pricing.header
// Short Description : Pricing Header
// Type : Transparent Table
// Notes: Will use across Apps
const pricing_header = [
    {
        tabl_form: "DEFAULT",
        vlue_fild: "action",
        name_fild: "",
        is_show: "YES"
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "pricing_id",
        name_fild: "Pricing ID",
        is_show: "YES"
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "image",
        name_fild: "Image",
        is_show: "YES"
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "description",
        name_fild: "Description",
        is_show: "YES"
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "internal_code",
        name_fild: "Internal Code",
        is_show: "YES"
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "type",
        name_fild: "Type",
        is_show: "YES"
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "group",
        name_fild: "Group",
        is_show: "YES"
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "characteristic",
        name_fild: "Characteristic",
        is_show: "YES"
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "uom",
        name_fild: "Currency",
        is_show: "YES"
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "validity",
        name_fild: "Valid Until",
        is_show: "YES"
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "price_profile",
        name_fild: "Price Profile",
        is_show: "YES"
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "customer",
        name_fild: "Customer",
        is_show: "YES"
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "region",
        name_fild: "Region",
        is_show: "YES"
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "price_level",
        name_fild: "Price Level",
        is_show: "YES"
    },
    {
        tabl_form: "DEFAULT",
        vlue_fild: "status",
        name_fild: "Status",
        is_show: "YES"
    }
];

export {
    sales_pricing_header_table,
    sales_pricing_item_table,
    pricing_header,
    pricing_data_table
};
