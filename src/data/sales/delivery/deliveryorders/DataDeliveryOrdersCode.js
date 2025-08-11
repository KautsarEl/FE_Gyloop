import { Link } from "react-router-dom";
import Action from "../../../../components/dropdown/action";
import CustomPopover from "../../../../components/dropdown/custom-popover";

const column_table_delivery_orders = [
  {
    title: (
      <center>
        <i className=" fas-ellipsis-vertical"></i>
      </center>
    ),
  },
  { title: "Delivery Order No." },
  { title: "Description" },
  { title: "Customer" },
  { title: "Delivery Point" },
  { title: "Delivery Due Date" },
  { title: "Inconterms" },
  { title: "Aging" },
  { title: "Stages" },
  { title: "Product Items" },
  { title: "Order Date" },
  { title: "Sales Person" },
  { title: "Territory Id" },
  { title: "Sales Group Id" },
  { title: "Division" },
  { title: "Department" },
  { title: "Created By" },
  { title: "Created Date" },
];

const data_table_delivery_orders = [
  {
    action: (
      <Action
        display={
          "/apps/sales/presales/deliveryorders/salesdeliveryordersdetail"
        }
        change={"/apps/sales/presales/deliveryorders/salesdeliveryorderschange"}
      />
    ),
    dev_no: (
      <div className=" flex justify-between gap-[16px]">
        {" "}
        <Link
          to="/apps/sales/presales/deliveryorders/salesdeliveryordersdetail"
          style={{ fontWeight: "bold" }}
        >
          1665351555277412312
        </Link>{" "}
        <CustomPopover />
      </div>
    ),
    desc: "Billing Term 1 - Blueprint",
    cs: (
      <div className=" flex justify-between gap-[16px]">
        {" "}
        <Link
          to="/apps/sales/presales/deliveryorders/salesdeliveryordersdetail"
          style={{ fontWeight: "bold" }}
        >
          PT. Trimegah Sejahtera, TBK 1
        </Link>{" "}
        <CustomPopover />
      </div>
    ),
    dev_pnt: "Plant Jakarta 1",
    dev_due_dte: "25 Aug 2023",
    inct: "FOB Plant Jakarta",
    aging: "3 Days",
    stages: "Confirmed",
    pdct_itms: "3 Items",
    order_date: "2 Jan 2023",
    sls_persn: (
      <div className=" flex justify-between gap-[16px]">
        {" "}
        <Link
          to="/apps/sales/presales/deliveryorders/salesdeliveryordersdetail"
          style={{ fontWeight: "bold" }}
        >
          Jhon Doe
        </Link>{" "}
        <CustomPopover />
      </div>
    ),
    trty_id: "JKT-BRC01",
    sls_grp_id: "SLS001",
    div: "SLS001",
    department: "SLS001",
    crtd_by: "Jhon Doe",
    crtd_dte: "23 Jan 2023, 08:00",
  },
];

export { data_table_delivery_orders, column_table_delivery_orders };
