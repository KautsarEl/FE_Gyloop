import React, { useState, useMemo, useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import ReactCountryFlag from "react-country-flag";

/**
 * DataCountrySelection
 * 
 * Props::
 * - defaultCountryName: (string) The country name to show initially. 
 *   For example: "Indonesia", "India", "United States", etc.
 * - isDisabled: (bool) Whether to disable the dropdown.
 * Props:
 * - defaultCountryName: (string) The country name to show initially.
 */
function DataCountrySelection({ defaultCountryName = "", isDisabled = false,valueChange = null }) {
  // 1. Get all country options: [{ label: "Afghanistan", value: "AF" }, ... ]
  const options = useMemo(() => countryList().getData(), []);

  // 2. Local state for the selected country object
  const [value, setValue] = useState(null);

  // 3. On mount or when defaultCountryName changes, find the matching country by label
  useEffect(() => {
    if (defaultCountryName) {
      const matchedOption = options.find(
        (option) => option.label.toLowerCase() === defaultCountryName.toLowerCase()
      );
      setValue(matchedOption || null);
    }
    
    
  }, [defaultCountryName, options,valueChange ]);
  

  // 4. Handle dropdown changes
  const handleChange = (selectedOption) => {
    setValue(selectedOption);
    // Optionally do something when the user selects a country
    // e.g. console.log('Selected Country:', selectedOption.label, selectedOption.value);
  };

  // 5. Render the Select component
  return (
    <Select
      value={value}               // The current selected option
      onChange={handleChange}     // On user select
      options={options}           // All countries
      isSearchable={true}
      isDisabled={isDisabled}
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
            style={{ width: "1.5em", height: "1.5em", marginRight: "8px" }}
          />
          <span>{option.label}</span>
        </div>
      )}
    />
  );
}

export default DataCountrySelection;
