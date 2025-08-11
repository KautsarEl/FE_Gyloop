import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

export default function RadioGroup({
  label,
  id,
  disabled,
  placeholder,
  customWidth,
  rules,
  required,
  name1,
  name2,
  group
}) {
  const [show, setShow] = useState(false);
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  return (
    <div className={customWidth ? customWidth : "w-full"}>
      <Form.Label className="form-label-custom flex">
        {label}
        {required && (
          <span className={`${!disabled && " text-red-600"} ml-[5px]`}>*</span>
        )}
      </Form.Label>
      <Form.Check // prettier-ignore
        disabled={disabled}
        type={"radio"}
        id={"default-radio"}
        label={`${name1}`}
        name={group}
        onChange={(e) => setShow(e.target.checked)}
      />
      <Form.Check // prettier-ignore
        disabled={disabled}
        type={"radio"}
        id={"default-radio"}
        label={`${name2}`}
        name={group}
        onChange={(e) => setShow(e.target.checked)}
      />
    </div>
  );
}
