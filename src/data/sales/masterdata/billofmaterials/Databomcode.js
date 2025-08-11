import { Link } from "react-router-dom";
import Action from "../../../../components/dropdown/action";
import CustomPopover from "../../../../components/dropdown/custom-popover";

const column_table_bom = [
  {
    title: (
      <center>
        <i className=" fas-ellipsis-vertical"></i>
      </center>
    ),
  },
  { title: "Product ID" },
  { title: "Description" },
  { title: "Item List" },
  { title: "Use" },
  { title: "Image Tags" },
  { title: "Superior Product" },
];

const data_table_bom = [
  {
    action: (
      <Action
        display={"/apps/sales/masterdata/billofmaterials/salesbomdetail"}
        change={"/apps/sales/masterdata/billofmaterials/salesbomchange"}
      />
    ),
    pdct_id: (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {" "}
        <Link
          to="/apps/sales/masterdata/billofmaterials/salesbomdetail"
          style={{ fontWeight: "bold" }}
        >
          KML0912-01PLKO
        </Link>{" "}
        <CustomPopover />
      </div>
    ),
    desc: "Engine Alternator Hino",
    item_list: "25 Items",
    use: (
      <div className=" flex gap-[5px] flex-wrap">
        <span className=" inline-flex items-center bg-[#c5c5c5] text-white py-[2px] px-[7px] text-[12px] rounded-[3px] gap-[10px]">
          PT. Indonesia Makmur
          <i
            // onClick={() => handleClose(item)}
            className="fars-xmark text-[12px]"
          ></i>
        </span>
        <span className=" inline-flex items-center bg-[#c5c5c5] text-white py-[2px] px-[7px] text-[12px] rounded-[3px] gap-[10px]">
          PT. Persada Indonesia Makmur Jaya 
          <i
            // onClick={() => handleClose(item)}
            className="fars-xmark text-[12px]"
          ></i>
        </span>
      </div>
    ),
    img_tags: "",
    supr_pdct: "3 Product",
  },
];

export { column_table_bom, data_table_bom };
