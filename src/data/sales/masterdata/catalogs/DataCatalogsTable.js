import { Link } from "react-router-dom";
import noImage from "../../../../assets/img/no-image.png";
import CustomPopover from "../../../../components/dropdown/custom-popover";
import Action from "../../../../components/dropdown/action";


const catalogs_dataTable = [
  {
    action: <Action change={"/apps/sales/masterdata/catalogs/salescatalogschange"} display={"/apps/sales/masterdata/catalogs/salescatalogsdetail"} />,
    product_id: (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {" "}
        <Link
          to="/apps/sales/masterdata/catalogs/salescatalogsdetail"
          style={{ fontWeight: "bold" }}
        >
          KML0912-01PLKO
        </Link>{" "}
        <CustomPopover />
      </div>
    ),
    image: <img width={70} src={noImage} alt="product_img" />,
    description: "Engine Alternator Hino HK388",
    ext_use: "Open for Public",
    price_policy: "Open for Public Price List",
    items: "256",
    status: "Publish",
  },
];

export { catalogs_dataTable };
