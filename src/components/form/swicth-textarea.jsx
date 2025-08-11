import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

export default function SwitchTextArea({
  label,
  disabled,
  id,
  required,
  rules,
  placeholder,
  status
}) {
  const [change, setChange] = useState(status);
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  return (
    <div className=" react-select-form h-[62px]">
      <Form.Label className="f-1 form-label-custom" htmlFor="Tenant ID">
        {label}
      </Form.Label>
      <Form.Check
        className=" !flex items-center gap-[15px]"
        onClick={() => (change ? setChange(false) : setChange(true))}
        type="switch"
        id={id}
        label={change ? "Yes" : "No"}
        disabled={disabled}
      />
      {change && (
        <Form.Control
          // id={id}
          as={"textarea"}
          rows={3}
          disabled={disabled}
          placeholder={placeholder}
          className="mt-[15px]"
          // {...register(id, rules)}
          // isInvalid={!!errors[id]}
        />
      )}
      {/* {required && errors[id] && (
        <Form.Text className="text-danger absolute bottom-[-20px]">
          {errors[id]?.message}
        </Form.Text>
      )} */}
    </div>
  );
}
