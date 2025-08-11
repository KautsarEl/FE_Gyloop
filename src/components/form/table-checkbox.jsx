import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

export default function TableCheckbox({
  label,
  id,
  disabled,
  placeholder,
  customWidth,
  rules,
  required,
  content,
}) {
  const [show, setShow] = useState(false);
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  return (
    <div className={customWidth ? customWidth : "w-full"}>
      <Form.Label className="form-label-custom flex opacity-100">
        <Form.Check // prettier-ignore
          disabled={disabled}
          type={"checkbox"}
          id={"default-checkbox"}
          label={`${label}`}
          onChange={(e) => setShow(e.target.checked)}
        />
        {required && (
          <span className={`${!disabled && " text-red-600"} ml-[5px]`}>*</span>
        )}
      </Form.Label>
      {show && content}
    </div>
  );
}
