import React from "react";
import { Form } from "react-bootstrap";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";

export default function SelectTags({
  label,
  id,
  options,
  disabled,
  placeholder,
  rules,
}) {
  const {
    control,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const selectedValue = watch(id);
  return (
    <div className=" react-select-form">
      <Form.Label className="form-label-custom mb-[6px]">{label}</Form.Label>
      <Controller
        name={id}
        control={control}
        rules={rules}
        render={({ field: { onChange, value, ref, ...restField } }) => (
          <Select
            {...restField}
            inputRef={ref}
            isMulti
            id={id}
            options={options}
            isSearchable={true}
            className="react-select-custom"
            isDisabled={disabled}
            placeholder={placeholder}
            value={options.filter((opt) => value?.includes(opt.value))} 
            onChange={(selected) => {
              const values = selected ? selected.map((item) => item.value) : [];
              onChange(values);
            }}
          />
        )}
      />
    </div>
  );
}
