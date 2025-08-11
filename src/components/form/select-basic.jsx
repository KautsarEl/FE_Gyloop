import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";

export default function SelectBasic({
  label,
  id,
  options,
  disabled,
  placeholder,
  rules,
  required,
  customWidth,
  defaultInputValue,
  widthstyles,
  as,
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
      } react-select-form relative ${customWidth ? customWidth : "w-full"} `}
    >
      <Form.Group className={` relative ${as && "flex items-center"} w-full`}>
        {label && (
          <Form.Label
            className={`form-label-custom mb-[6px] truncate ${as && "w-full"}`}
          >
            {label}
            {required && (
              <span className={`${!disabled && " text-red-600"} ml-[5px]`}>
                *
              </span>
            )}
          </Form.Label>
        )}
        <div className={`${as && "w-full"}`}>
          <Controller
            name={id}
            control={control}
            rules={rules}
            render={({ field }) => (
              <>
                <Select
                  {...field}
                  onChange={(selected) => {
                    setValue(id, selected?.value.label || null, {
                      shouldValidate: true,
                    });
                  }}
                  value={
                    selectedValue
                      ? { value: selectedValue, label: selectedValue }
                      : null
                  }
                  options={options}
                  isSearchable={true}
                  className={` ${widthstyles}
                ${errors[id] ? "is-invalid" : "react-select-custom"}`}
                  isDisabled={disabled}
                  placeholder={placeholder}
                  // isClearable={true}
                  defaultValue={defaultInputValue}
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
      </Form.Group>
    </div>
  );
}
