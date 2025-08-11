import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

export default function InputText({
  label,
  id,
  disabled,
  placeholder,
  customWidth,
  rules,
  required,
  styles,
  as,
}) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  return (
    <div className={customWidth ? customWidth : "w-full"}>
      <Form.Group className={` relative ${as && "flex items-center"} w-full`}>
        {label && (
          <Form.Label
            className={`f-1 form-label-custom ${as && "w-full"}`}
            htmlFor="Tenant ID"
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
          <Form.Control
            id={id}
            name={id}
            type="text"
            disabled={disabled}
            placeholder={placeholder}
            {...register(id, rules)}
            isInvalid={!!errors[id]}
            className={styles}
            // value={watch(id)}
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
