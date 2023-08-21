import React, {
  InputHTMLAttributes,
  ForwardedRef,
  forwardRef,
  useId,
} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
};

const Input = (
  { label, helperText, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const id = useId();

  return (
    <label htmlFor={id}>
      {label}
      <input
        {...props}
        ref={ref}
        id={id}
        aria-invalid={helperText ? "true" : "false"}
      />
      <p role="alert">{helperText}</p>
    </label>
  );
};

export default forwardRef(Input);
