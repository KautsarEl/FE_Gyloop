import { Link } from "react-router-dom";
import Action from "../../../../components/dropdown/action";
import CustomPopover from "../../../../components/dropdown/custom-popover";

const column_table_quotations = [
  {
    title: (
      <center>
        <i className=" fas-ellipsis-vertical"></i>
      </center>
    ),
  },
  { title: "Quotations No." },
  { title: "Description" },
  { title: "Account" },
  { title: "Stages" },
  { title: "Qoute Date" },
  { title: "Amount" },
  { title: "Account Owner" },
  { title: "Territory ID" },
  { title: "Sales Group ID" },
  { title: "Division" },
  { title: "Department" },
  { title: "Profit Center" },
  { title: "Reference Type" },
  { title: "Reference No" },
  { title: "Following Doc. Type" },
  { title: "Following Doc. No" },
  { title: "Cycle Time" },
  { title: "Industry" },
  { title: "Segmentation" },
];

const data_table_quotations = [
  {
    action: (
      <Action
        display={"/apps/sales/presales/quotations/salesquotationsdetail"}
        change={"/apps/sales/presales/quotations/salesquotationschange"}
      />
    ),
    opp_no: (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {" "}
        <Link
          to="/apps/sales/presales/quotations/salesquotationsdetail"
          style={{ fontWeight: "bold" }}
        >
          1665351555277412312
        </Link>{" "}
        <CustomPopover />
      </div>
    ),
    desc: "Billing Term 1 - Blueprint",
    account: (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {" "}
        <Link
          to="/apps/sales/presales/quotations/salesquotationsdetail"
          style={{ fontWeight: "bold" }}
        >
          1665351555277412312
        </Link>{" "}
        <CustomPopover />
      </div>
    ),
    stages: "Project Server Sizing Services",
    qot_dte: "25 Aug 2023",
    amount: (
      <div className=" flex justify-between">
        <span>IDR</span>
        <span>200.000.000,00</span>
      </div>
    ),
    acc_own:<Link className=" font-bold">Julian Sianturi</Link>,
    tety_id: "JKT-BRC01",
    sales_gr_id: "SLS001" ,
    div: "SLS001"  ,
    department: "SLS001"  ,
    profit_center: "SLS001"  ,
    ref_type: "Opportunity"  ,
    ref_no: <Link className=" font-bold">1665351555277412312</Link>  ,
    foldoc_type: "Sales Order",
    foldoc_no: <Link className=" font-bold">1665351555277412312</Link>,
    cycle_time: "36 Days",
    industry: "Oil & Gas",
    segmen: "Enterprise",
  },
];

export {data_table_quotations, column_table_quotations}
