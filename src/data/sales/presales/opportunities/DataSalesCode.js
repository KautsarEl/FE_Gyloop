import { Link } from "react-router-dom";
import Action from "../../../../components/dropdown/action";
import CustomPopover from "../../../../components/dropdown/custom-popover";

const column_table_opportunity = [
  {
    title: (
      <center>
        <i className=" fas-ellipsis-vertical"></i>
      </center>
    ),
  },
  { title: "Opportunity No." },
  { title: "Description" },
  { title: "Account" },
  { title: "Stages" },
  { title: "Closing Date" },
  { title: "Amount" },
  { title: "Account Owner" },
  { title: "Billing Due Date" },
  { title: "Collection" },
  { title: "Status" },
];

const data_table_opportunity = [
  {
    action: (
      <Action
        display={"/apps/sales/presales/opportunities/salesopportunitiesdetail"}
        change={"/apps/sales/presales/opportunities/salesopportunitieschange"}
      />
    ),
    opp_no: (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {" "}
        <Link
          to="/apps/sales/presales/opportunities/salesopportunitiesdetail"
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
          to="/apps/sales/presales/opportunities/salesopportunitiesdetail"
          style={{ fontWeight: "bold" }}
        >
          1665351555277412312
        </Link>{" "}
        <CustomPopover />
      </div>
    ),
    stages: "Project Server Sizing Services",
    cls_dte: "25 Aug 2023",
    amount: (
      <div className=" flex justify-between">
        <span>IDR</span>
        <span>200.000.000,00</span>
      </div>
    ),
    acc_own:<Link className=" font-bold">Julian Sianturi</Link>,
    bil_dte: "25 Aug 2022",
    collection: <p className="p-0 m-0 text-green-500 font-bold">100%</p> ,
    status: <p className="p-0 m-0 text-green-500 font-bold">Completed</p> ,
  },
];

export {data_table_opportunity, column_table_opportunity}
