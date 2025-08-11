import { Link } from "react-router-dom";
import noImage from "../../../../assets/img/no-image.png";
import CustomPopover from "../../../../components/dropdown/custom-popover";
import Action from "../../../../components/dropdown/action";


const product_data_table = [
  {
    action: <Action display={"/apps/sales/masterdata/products/salesproductsdetail"} change={"/apps/sales/masterdata/products/salesproductschange"} />,
    product_id: (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {" "}
        <Link
          to="/apps/sales/masterdata/products/salesproductsdetail"
          style={{ fontWeight: "bold" }}
        >
          KML0912-01PLKO
        </Link>{" "}
        <CustomPopover />
      </div>
    ),
    image: <img width={70} src={noImage} alt="product_img" />,
    description: "Engine Alternator Hino HK388",
    internal_code: "KKS81665142",
    type: "Heavy Equipment Parts",
    group: "Small Parts",
    characteristic: "Non-Stock Item",
    uom: "Pieces",
    delivery: "7-10 Days",
    product_profile: "-",
    brand: "-",
    mpn: "-",
    article_number: "-",
    barcode: "-",
    tags: "-",
  },
];

const product_data_show = {
  idno_prod: "" /*Product ID*/,
  numb_prod: "" /*Product Number (Auto Generate)*/,
  fnam_imag: "" /*Product Image URL*/,
  desc_shrt: "" /*Short Description*/,
  idno_intr: "" /*Internal Number*/,
  type_prod: "" /*Product Type*/,
  prof_prod: "" /*Product Profile*/,
  bran_prod: "" /*Product Brand*/,
  idno_mpnn: "" /*Manufacturing Part Number*/,
  idno_artc: "" /*Article Number*/,
  code_xbar: "" /*Barcode*/,
  prod_tags: "" /*Product Tags*/,
}

export { product_data_table, product_data_show };
