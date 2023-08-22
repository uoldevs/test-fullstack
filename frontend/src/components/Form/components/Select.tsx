import React, {
  SelectHTMLAttributes,
  ForwardedRef,
  forwardRef,
  useId,
} from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children?: React.ReactNode;
  label?: string;
  helperText?: string;
};

const Select = (
  { children, label, helperText, ...props }: SelectProps,
  ref: ForwardedRef<HTMLSelectElement>
) => {
  const id = useId();

  return (
    <div className="my-2.5">
      <div className="relative">
        <select
          {...props}
          ref={ref}
          id={id}
          className={`block rounded-md px-3 pb-2.5 pt-4 w-full bg-black-50 text-base text-black-800 border-2 appearance-none focus:outline-none focus:ring-0focus:border-fire-bush-400 ${
            helperText ? "border-valencia-600" : "border-black-200"
          }`}
        >
          {children}
        </select>
        <label
          htmlFor={id}
          className="absolute text-xl text-black-500 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-black-50 mx-2 px-1 left-1"
        >
          {label}
        </label>
      </div>
      <p className="mt-2 mb-4 ml-1 text-sm text-valencia-600" role="alert">
        {helperText}
      </p>
    </div>
  );
};

export default forwardRef(Select);
