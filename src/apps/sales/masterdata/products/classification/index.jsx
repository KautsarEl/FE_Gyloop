import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import SelectBasic from "../../../../../components/form/select-basic";
import { FormProvider, useForm } from "react-hook-form";
import { fetchProduct } from "../../../../../data/sales/masterdata/products/salesproducts/DataProducts";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getProductCharacteristics } from "../../../../../data/configuration/masterdata/products/DataConfigProductCharacteristic";
import { getProductCategorys } from "../../../../../data/configuration/masterdata/products/DataConfigProductCategory";
import { getProductGroups } from "../../../../../data/configuration/masterdata/products/DataConfigProductGroup";
import { getProductModels } from "../../../../../data/configuration/masterdata/products/DataConfigProductModel";
import { getProductClasss } from "../../../../../data/configuration/masterdata/products/DataConfigProductClass";
import { getProductSeriess } from "../../../../../data/configuration/masterdata/products/DataConfigProductSeries";
import { getSpecialIndicators } from "../../../../../data/configuration/masterdata/products/DataConfigSpecialIndicator";
import { getInternalProductTypes } from "../../../../../data/configuration/masterdata/products/DataConfigInternalProductType";
import { getInternalProductGroups } from "../../../../../data/configuration/masterdata/products/DataConfigInternalProductGroup";

export default function Classification({ disabled }) {
  const methods = useForm({ mode: "onChange" });
  const [formList, setFormList] = useState({
    char_prod: "" /*Product Characteristic*/,
    catg_prod: "" /*Product Category*/,
    type_prod_in: "" /*Internal Product Type*/,
    grop_prod: "" /*Product Group*/,
    grop_prod_in: "" /*Internal Product Group*/,
    clas_prod: "" /*Product Class*/,
    modl_prod: "" /*Product Model*/,
    sers_prod: "" /*Product Series*/,
    indc_spcl: "" /*Special Indicator*/,
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://203.175.11.244:8080/api/products/${id}`
        );
        setData(response.data);

        // Update formList with API data
        if (response.data) {
          setFormList({
            char_prod: response.data.char_prod || "",
            catg_prod: response.data.catg_prod || "",
            grop_prod: response.data.grop_prod || "",
            type_prod_in: response.data.type_prod_in || "",
            grop_prod_in: response.data.grop_prod_in || "",
            clas_prod: response.data.clas_prod || "",
            modl_prod: response.data.modl_prod || "",
            sers_prod: response.data.sers_prod || "",
            indc_spcl: response.data.indc_spcl || "",
          });
        }
      } catch (err) {
        setError(err.message);
      } finally {
        // setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  // Update form values when formList changes
  useEffect(() => {
    if (formList) {
      methods.reset({
        char_prod: formList.char_prod,
        catg_prod: formList.catg_prod,
        type_prod_in: formList.type_prod_in,
        grop_prod: formList.grop_prod,
        grop_prod_in: formList.grop_prod_in,
        clas_prod: formList.clas_prod,
        modl_prod: formList.modl_prod,
        sers_prod: formList.sers_prod,
        indc_spcl: formList.indc_spcl,
      });
    }
  }, [formList, methods]);

  const dispatch = useDispatch();
  const { product_characteristic } = useSelector(
    (state) => state.configProductCharacteristic
  );
  const { product_category } = useSelector(
    (state) => state.configProductCategory
  );
  const { product_group } = useSelector((state) => state.configProductGroup);
  const { product_class } = useSelector((state) => state.configProductClass);
  const { product_model } = useSelector((state) => state.configProductModel);
  const { product_series } = useSelector((state) => state.configProductSeries);
  const { special_indicator } = useSelector((state) => state.configSpecialIndicator);
  const { internal_product_type } = useSelector((state) => state.configInternalProductType);
  const { internal_product_group } = useSelector((state) => state.configInternalProductGroup);
  useEffect(() => {
    dispatch(getProductCharacteristics());
    dispatch(getProductCategorys());
    dispatch(getProductGroups());
    dispatch(getProductClasss());
    dispatch(getProductModels());
    dispatch(getProductSeriess());
    dispatch(getSpecialIndicators());
    dispatch(getInternalProductTypes());
    dispatch(getInternalProductGroups());
  }, [dispatch]);

  return (
    <div className="px-[20px] py-[30px]">
      {/* <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}> */}
      <Row className="Row-SystemId">
        <Col>
          <div className="flex flex-col gap-[24px]">
            <SelectBasic
              label="Product Characteristic"
              id="char_prod"
              options={product_characteristic.map((item, i) => ({
                value: { value: item.char_prod, label: item.desc_shrt },
                label: (
                  <div className=" truncate ...">
                    {item.char_prod} - {item.desc_shrt}
                  </div>
                ),
              }))}
              disabled={disabled}
              placeholder="Please Select Product Characteristic"
              required={true}
              rules={{ required: "This field is required" }}
              // defaultInputValue={formList.char_prod}
            />
            <SelectBasic
              label="Product Category"
              id="catg_prod"
              options={product_category.map((item, i) => ({
                value: { value: item.catg_prod, label: item.desc_shrt },
                label: (
                  <div className=" truncate ...">
                    {item.catg_prod} - {item.desc_shrt}
                  </div>
                ),
              }))}
              disabled={disabled}
              placeholder="Please Select Product Category"
              required={true}
              rules={{ required: "This field is required" }}
              // defaultInputValue={formList.catg_prod}
            />
            <SelectBasic
              label="Product Group"
              id="grop_prod"
              options={product_group.map((item, i) => ({
                value: { value: item.grop_prod, label: item.desc_shrt },
                label: (
                  <div className=" truncate ...">
                    {item.grop_prod} - {item.desc_shrt}
                  </div>
                ),
              }))}
              disabled={disabled}
              placeholder="Please Select Product Group"
              required={true}
              rules={{ required: "This field is required" }}
              // defaultInputValue={formList.grop_prod}
            />
            <SelectBasic
              label="Internal Product Type"
              id="type_prod_in"
              options={internal_product_type.map((item, i) => ({
                value: { value: item.type_prod_in, label: item.desc_shrt },
                label: (
                  <div className=" truncate ...">
                    {item.type_prod_in} - {item.desc_shrt}
                  </div>
                ),
              }))}
              disabled={disabled}
              placeholder="Please Select Internal Product Type"
              required={true}
              rules={{ required: "This field is required" }}
              // defaultInputValue={formList.type_prod_in}
            />
            <SelectBasic
              label="Internal Product Group"
              id="grop_prod_in"
              options={internal_product_group.map((item, i) => ({
                value: { value: item.grop_prod_in, label: item.desc_shrt },
                label: (
                  <div className=" truncate ...">
                    {item.grop_prod_in} - {item.desc_shrt}
                  </div>
                ),
              }))}
              disabled={disabled}
              placeholder="Please Select Internal Product Group"
              required={true}
              rules={{ required: "This field is required" }}
              // defaultInputValue={formList.grop_prod_in}
            />
          </div>
        </Col>

        <Col>
          <div className="flex flex-col gap-[24px]">
            <SelectBasic
              label="Product Class"
              id="clas_prod"
              options={product_class.map((item, i) => ({
                value: { value: item.clas_prod, label: item.desc_shrt },
                label: (
                  <div className=" truncate ...">
                    {item.clas_prod} - {item.desc_shrt}
                  </div>
                ),
              }))}
              disabled={disabled}
              placeholder="Please Select Product Class"
              required={true}
              rules={{ required: "This field is required" }}
              // defaultInputValue={formList.clas_prod}
            />
            <SelectBasic
              label="Product Model"
              id="modl_prod"
              options={product_model.map((item, i) => ({
                value: { value: item.modl_prod, label: item.desc_shrt },
                label: (
                  <div className=" truncate ...">
                    {item.modl_prod} - {item.desc_shrt}
                  </div>
                ),
              }))}
              disabled={disabled}
              placeholder="Please Select Product Model"
              required={true}
              rules={{ required: "This field is required" }}
              // defaultInputValue={formList.modl_prod}
            />
            <SelectBasic
              label="Product Series"
              id="sers_prod"
              options={product_series.map((item, i) => ({
                value: { value: item.sers_prod, label: item.desc_shrt },
                label: (
                  <div className=" truncate ...">
                    {item.sers_prod} - {item.desc_shrt}
                  </div>
                ),
              }))}
              disabled={disabled}
              placeholder="Please Select Product Series"
              required={true}
              rules={{ required: "This field is required" }}
              // defaultInputValue={formList.sers_prod}
            />
            <SelectBasic
              label="Special Indicator"
              id="indc_spcl"
              options={special_indicator.map((item, i) => ({
                value: { value: item.indc_spcl, label: item.desc_shrt },
                label: (
                  <div className=" truncate ...">
                    {item.indc_spcl} - {item.desc_shrt}
                  </div>
                ),
              }))}
              disabled={disabled}
              placeholder="Please Select Special Indicator"
              required={true}
              rules={{ required: "This field is required" }}
              // defaultInputValue={formList.indc_spcl}
            />
          </div>
        </Col>
      </Row>
      {/* </Form>
      </FormProvider> */}
    </div>
  );
}
