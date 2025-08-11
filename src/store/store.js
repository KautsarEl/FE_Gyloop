import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "../data/locations/CitySlice";
import systemConfigReducer from "../data/administration/orgsystems/systemid/system_config";
import productReducer from "../data/sales/masterdata/products/salesproducts/DataProducts";
import layoutItemReducer from "../data/sales/masterdata/products/DataSalesProducts";

// Config
import configProductTypeReducer from "../data/configuration/masterdata/products/DataConfigProductType";
import configProductBrandReducer from "../data/configuration/masterdata/products/DataConfigProductBrand";
import configProductCharacteristicReducer from "../data/configuration/masterdata/products/DataConfigProductCharacteristic";
import configProductCategoryReducer from "../data/configuration/masterdata/products/DataConfigProductCategory";
import configProductTagsReducer from "../data/configuration/masterdata/products/DataConfigProductTags";
import configTypeTagReducer from "../data/configuration/masterdata/products/DataConfigTypeTags";
import configProductGroupReducer from "../data/configuration/masterdata/products/DataConfigProductGroup";
import configProductClassReducer from "../data/configuration/masterdata/products/DataConfigProductClass";
import configProductModelReducer from "../data/configuration/masterdata/products/DataConfigProductModel";
import configProductSeriesReducer from "../data/configuration/masterdata/products/DataConfigProductSeries";
import configSpecialIndicatorReducer from "../data/configuration/masterdata/products/DataConfigSpecialIndicator";
import configInternalProductTypeReducer from "../data/configuration/masterdata/products/DataConfigInternalProductType";
import configInternalProductGroupReducer from "../data/configuration/masterdata/products/DataConfigInternalProductGroup";
import configCustomFieldProfileReducer from "../data/configuration/masterdata/products/DataConfigCustomFieldProfile";
import configSpecificationProfileReducer from "../data/configuration/masterdata/products/DataConfigSpecificationProfile";
import configVariantProfileItemReducer from "../data/configuration/masterdata/products/DataConfigVariantProfileItem";
import configVariantProfileReducer from "../data/configuration/masterdata/products/DataConfigVariantProfile";

export const store = configureStore({
  reducer: {
    cities: cityReducer,
    configs: systemConfigReducer,
    products: productReducer,
    layoutItems: layoutItemReducer,
    configProductType: configProductTypeReducer,
    configProductBrand: configProductBrandReducer,
    configProductCharacteristic: configProductCharacteristicReducer,
    configProductCategory: configProductCategoryReducer,
    configProductTags: configProductTagsReducer,
    configTypeTags: configTypeTagReducer,
    configProductGroup: configProductGroupReducer,
    configProductClass: configProductClassReducer,
    configProductModel: configProductModelReducer,
    configProductSeries: configProductSeriesReducer,
    configSpecialIndicator: configSpecialIndicatorReducer,
    configInternalProductType: configInternalProductTypeReducer,
    configInternalProductGroup: configInternalProductGroupReducer,
    configCustomFieldProfile: configCustomFieldProfileReducer,
    configSpecificationProfile: configSpecificationProfileReducer,
    configVariantProfileItem: configVariantProfileItemReducer,
    configVariantProfile: configVariantProfileReducer,
  },
});
