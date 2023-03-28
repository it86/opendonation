"use client";

import React, { useEffect } from "react";
import { FormControlProps } from "react-bootstrap/esm/FormControl";

import Form from "react-bootstrap/Form";

interface DebouncedInputProps
  extends Omit<FormControlProps, "onChange" | "value"> {
  value: string;
  onChange: (value: string) => void;
  debounce?: number;
}

const DebouncedInput: React.FC<DebouncedInputProps> = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) => {
  const [value, setValue] = React.useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <Form.Control
      {...props}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default DebouncedInput;
