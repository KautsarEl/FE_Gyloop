import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

export default function CheckboxGroup({
  label,
  id,
  disabled,
  placeholder,
  customWidth,
  rules,
  required,
  dataCheck,
}) {
  const [data, setData] = useState(dataCheck);

  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  return (
    <div className={customWidth ? customWidth : "w-full"}>
      <Form.Label className="form-label-custom flex opacity-100">
        {label}
        {required && (
          <span className={`${!disabled && " text-red-600"} ml-[5px]`}>*</span>
        )}
      </Form.Label>
      <div className=" flex flex-col gap-[4px]">
        {data.map((item) => (
          <Form.Check // prettier-ignore
            disabled={disabled}
            type={"checkbox"}
            id={"default-checkbox"}
            label={`${item}`}
          />
        ))}
      </div>
    </div>
  );
}
