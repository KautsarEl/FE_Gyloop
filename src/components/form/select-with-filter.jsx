import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";

export default function SelectWithFilter({
  label,
  id,
  options,
  disabled,
  placeholder,
  rules,
  required,
  customWidth,
  onChange,
  value
}) {
  const {
    control,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const selectedValue = watch(id);

  return (
    <div
      className={`${
        disabled ? " cursor-not-allowed" : ""
      } react-select-form relative ${
        customWidth ? customWidth : "w-full"
      } flex items-center`}
    >
      {label && (
        <Form.Label className="form-label-custom w-[130px]">
          {label}
          {required && (
            <span className={`${!disabled && " text-red-600"} ml-[5px]`}>
              *
            </span>
          )}
        </Form.Label>
      )}
      <div className=" w-full">
        <Controller
          name={id}
          control={control}
          rules={rules}
          render={({ field }) => (
            <>
              <Select
                isMulti
                {...field}
                onChange={onChange}
                value={value}
                options={options}
                isSearchable={true}
                className={` ${
                  errors[id] ? "is-invalid" : "react-select-custom "
                }`}
                isDisabled={disabled}
                placeholder={placeholder}
                isClearable={true}
              />
            </>
          )}
        />
        {required && errors[id] && (
          <Form.Text className="text-danger absolute bottom-[-20px]">
            {errors[id]?.message}
          </Form.Text>
        )}
      </div>
    </div>
  );
}
