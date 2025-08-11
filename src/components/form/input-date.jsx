import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

export default function InputDate({
  label,
  id,
  disabled,
  placeholder,
  customWidth,
  rules,
  required,
  styles,
}) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  return (
    <div className={customWidth ? customWidth : "w-full"}>
      <Form.Group className=" relative">
        {label && (
          <Form.Label className="f-1 form-label-custom" htmlFor="Tenant ID">
            {label}
            {required && (
              <span className={`${!disabled && " text-red-600"} ml-[5px]`}>
                *
              </span>
            )}
          </Form.Label>
        )}
        <Form.Control
          id={id}
          type="date"
          disabled={disabled}
        />
        {required && errors[id] && (
          <Form.Text className="text-danger absolute bottom-[-20px]">
            {errors[id]?.message}
          </Form.Text>
        )}
      </Form.Group>
    </div>
  );
}
