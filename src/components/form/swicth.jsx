import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

export default function Switch({ label, disabled, id, status }) {
  const [change, setChange] = useState(status);
  const {
    register,
    formState: { errors },
    watch,
    setValue,
    getValues
  } = useFormContext();

  // Update state when status prop changes
  useEffect(() => {
    setChange(status);
    setValue(id, status);
  }, [status, id, setValue]);

  // Handle switch change
  const handleSwitchChange = (e) => {
    const newValue = !change;
    setChange(newValue);
    setValue(id, newValue);
  };

  return (
    <div className="react-select-form h-[62px]">
      <Form.Label className="f-1 form-label-custom" htmlFor={id}>
        {label}
      </Form.Label>
      <Form.Check
        className={`!flex items-center gap-[15px] ${disabled && " disabled"}`}
        onChange={handleSwitchChange}
        checked={change}
        type="switch"
        id={id}
        label={change ? "Yes" : "No"}
        disabled={disabled}
        {...register(id)}
      />
    </div>
  );
}
