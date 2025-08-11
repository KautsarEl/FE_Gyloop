import React, { useMemo, useState } from "react";
import Select from "react-select";
import { Col, Form, Row } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import countryList from "react-select-country-list";
import { tenantid_config } from "../../../../../data/administration/orgsystems/tenantid/DataTenantid";
import { currentIdno_Systm } from "../../../../../data/administration/orgsystems/systemid/DataSystemid";
import { provinceData } from "../../../../../data/locations/DataProvince";
import PhoneInput from "react-phone-input-2";

export default function Contacts() {
  const index = tenantid_config.findIndex(
    (item) => item.idno_systm === currentIdno_Systm
  );
  const options = useMemo(() => countryList().getData(), []);
  const [value, setValue] = useState(tenantid_config[index].main_addr_cntr_id);
  const [label, setLabel] = useState(tenantid_config[index].main_addr_cntr);
  const [number, setNumber] = useState(
    tenantid_config[index].main_addr_cntr_id
  );
  const handleChange = (selectedOption) => {
    setValue(selectedOption.value);
    setLabel(selectedOption.label);
    setNumber(selectedOption.value);
    // setPhone(selectedOption.value)
  };
  const handleProvince = (value) => {
    setValue(value.id_cntr);
    setLabel(value.label_cntr);
    setNumber(value.id_cntr);
  };
  return (
    <div className="px-[20px] py-[30px]">
      <Form>
        <Row className=" Row-SystemId">
          {/* //Coumn 1 */}
          <Col>
            {/* // Main Address */}
            <div className="mb-4">
              <Form.Label
                className="f-1 form-label-custom"
                htmlFor="Office Name"
              >
                First Name
              </Form.Label>
              <Form.Control
                required
                id="main_addr_addr"
                type="text"
                placeholder="Please input first name"
                disabled={false}
              />
            </div>
            <div className="mb-4">
              <Form.Label
                className="f-1 form-label-custom"
                htmlFor="Office Name"
              >
                Last Name
              </Form.Label>
              <Form.Control
                required
                id="main_addr_addr"
                type="text"
                placeholder="Please input last name"
                disabled={false}
              />
            </div>

            {/* // Address Line 1 */}
            <div className="mb-4">
              <Form.Label
                className="f-1 form-label-custom"
                htmlFor="Address Line 1"
              >
                Address Line 1
              </Form.Label>
              <Form.Control
                required
                id="main_addr_ln01"
                type="text"
                placeholder="Please input Address Line 1"
                disabled={false}
              />
            </div>

            {/* // Address Line 2 */}
            <div className="mb-4">
              <Form.Label
                className="f-1 form-label-custom"
                htmlFor="Address Line 2"
              >
                Address Line 2
              </Form.Label>
              <Form.Control
                required
                id="main_addr_ln02"
                type="text"
                placeholder="Please input Address Line 2"
                disabled={false}
              />
            </div>

            {/* // City */}
            <div className="mb-4">
              <Form.Label className="f-1 form-label-custom" htmlFor="City">
                City
              </Form.Label>
              <Form.Control
                required
                id="main_addr_city"
                type="text"
                placeholder="Please input City"
                disabled={false}
              />
            </div>

            {/* // Province */}
            <div className="mb-4 react-select-form">
              <Form.Label className="f-1 form-label-custom" htmlFor="Province">
                Province
              </Form.Label>

              <Select
                id="main_addr_prov"
                options={provinceData.map((item, i) => ({
                  label: item.main_addr_prov,
                  value: item.main_addr_prov,
                  id_cntr: item.main_addr_cntr_id,
                  label_cntr: item.main_addr_cntr,
                }))}
                isSearchable={true}
                isDisabled={false}
                className=" react-select-custom"
                onChange={(e) => handleProvince(e)}
                defaultValue={[
                  {
                    label: provinceData[index].main_addr_prov,
                  },
                ]}
              />
              {/* <option style={{marginTop: 15}} value="">Select Province</option>
                      {provinceData
                        .filter(
                            (province) => province.main_addr_cntr_id === "ID"
                        )
                        .map((province) => (
                          <option
                            key={province.main_addr_prov_id}
                            value={province.main_addr_prov}
                            >
                            {province.main_addr_prov}
                            </option>
                            ))} */}
            </div>
            {/* // Province */}
            <div className="mb-4">
              <Form.Label className="f-1 form-label-custom" htmlFor="Province">
                Province
              </Form.Label>
              <Form.Control
                required
                id="main_addr_prov"
                as="select"
                disabled={false}
                value={tenantid_config[index].main_addr_prov || ""}
              >
                <option value="">Select Province</option>
                {provinceData
                  .filter((province) => province.addr_cntr_id === "ID")
                  .map((province) => (
                    <option
                      key={province.addr_prov_id}
                      value={province.addr_prov}
                    >
                      {province.addr_prov}
                    </option>
                  ))}
              </Form.Control>
            </div>

            {/* <Select
                        id="main_addr_prov"
                        options={selectActivationStatus}
                        isSearchable={true}
                        isDisabled={false}
                        className=" react-select-custom"
                        defaultValue={[
                            {
                                label: tenantid_config[index].sytm_sint
                                },
                                ]}
                                /> */}

            {/* // District */}
            <div className="mb-4">
              <Form.Label className="f-1 form-label-custom" htmlFor="City">
                District
              </Form.Label>
              {/* <Col className=" custom-form-control"> */}
              <Form.Control
                required
                id="main_addr_dist"
                type="text"
                placeholder="Please input District"
                disabled={false}
              />
              {/* </Col> */}
            </div>

            {/* // State */}
            <div className="mb-4">
              <Form.Label className="f-1 form-label-custom" htmlFor="State">
                State
              </Form.Label>
              {/* <Col className=" custom-form-control"> */}
              <Form.Control
                required
                id="main_addr_stat"
                type="text"
                placeholder="Please input State"
                disabled={false}
              />
              {/* </Col> */}
            </div>

            {/* // Postal Code */}
            <div className="mb-4">
              <Form.Label
                className="f-1 form-label-custom"
                htmlFor="Postal Code"
              >
                Postal Code
              </Form.Label>
              <Col className=" custom-form-control">
                <Form.Control
                  required
                  id="main_addr_stat"
                  type="text"
                  placeholder="Please input Postal Code"
                  disabled={false}
                />
              </Col>
            </div>
            {/* // Country */}
            <div className="mb-4 react-select-form">
              <Form.Label className="f-1 form-label-custom" htmlFor="Country">
                Country
              </Form.Label>
              {/* <DataCountrySelection
                      id="main_addr_cntr"
                      isDisabled={false}
                      className="react-select-custom"
                      defaultCountryName={value}
                      onChange={(selectedCountry) => {
                        // Add your state management for selected country here
                        }}
                        /> */}
              <Select
                value={{ value: value, label: label }} // The current selected option
                onChange={handleChange} // On user select
                options={options} // All countries
                isSearchable={true}
                isDisabled={false}
                className="react-select-custom"
                // Tells react-select how to match/filter by text
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                // Custom label rendering (flag + country name)
                formatOptionLabel={(option) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <ReactCountryFlag
                      countryCode={option.value}
                      svg
                      style={{
                        width: "1.5em",
                        height: "1.5em",
                        marginRight: "8px",
                      }}
                    />
                    <span>{option.label}</span>
                  </div>
                )}
              />
            </div>
          </Col>

          {/* //Coumn 2 */}
          <Col>
            {/* // Phone Number */}
            <div className="mb-4">
              <Form.Label
                className="f-1 form-label-custom"
                htmlFor="Phone Number"
              >
                Phone Number
              </Form.Label>
              <div className=" flex items-center custom-reactPhone">
                <PhoneInput
                  country={number.toLowerCase()}
                  value={""}
                  disabled={true}
                  onChange={(phone) => console.log(phone.dialcode)}
                />
                <div class="input-group">
                  <input
                    disabled={false}
                    id="inputPhoneNumber"
                    type="text"
                    class="form-control"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
            </div>

            {/* // Website */}
            <div className="mb-4">
              <Form.Label className="f-1 form-label-custom" htmlFor="Website">
                Website
              </Form.Label>
              <Form.Control
                required
                id="addr_webs"
                type="text"
                placeholder="Please input Super Website"
                disabled={false}
              />
            </div>

            {/* // Default Time Zone */}
            <div className="mb-4">
              <Form.Label
                className="f-1 form-label-custom"
                htmlFor="Default Time Zone"
              >
                Default Time Zone
              </Form.Label>
              <Col className=" custom-form-control">
                <Form.Control
                  required
                  id="main_code_tzon"
                  type="text"
                  placeholder="Please input Default Time Zone"
                  disabled={false}
                />
              </Col>
            </div>
          </Col>

          {/* //Coumn 3 */}
          <Col></Col>
        </Row>
      </Form>
    </div>
  );
}
