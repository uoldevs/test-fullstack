import React, { ForwardedRef, forwardRef, useId } from "react";
import { IMaskInput, IMaskInputProps } from "react-imask";

type InputProps = IMaskInputProps<HTMLInputElement> & {
  label: string;
  helperText?: string;
};

const Input = (
  { label, helperText, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const id = useId();

  return (
    <div className="my-6">
      <div className="relative">
        <IMaskInput
          {...props}
          inputRef={ref}
          id={id}
          aria-invalid={helperText ? "true" : "false"}
          className={`block peer appearance-non bg-white-50 rounded-md px-3 pb-2.5 pt-4 w-full text-base text-black-800 border-2 focus:outline-none focus:ring-0 focus:border-fire-bush-400 ${
            helperText ? "border-valencia-600" : "border-black-300"
          }`}
          placeholder=" "
        />
        <label
          htmlFor={id}
          className={`absolute rounded-md text-xl text-black-500 duration-300 transform scale-75 top-0 -translate-y-1/2 peer-focus:scale-75 peer-focus:top-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 z-10 origin-[0] bg-white-50 mx-2 px-1 left-1 pointer-events-none ${
            helperText ? "text-valencia-600" : "text-black-300"
          }`}
        >
          {label}
        </label>
      </div>
      {helperText && (
        <p className="mt-2 mb-4 ml-1 text-sm text-valencia-600" role="alert">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default forwardRef(Input);
