import React, {
  SelectHTMLAttributes,
  ForwardedRef,
  forwardRef,
  useId,
} from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children: React.ReactNode[];
  label: string;
  helperText?: string;
  defaultValue?: string;
};

const Select = (
  { children, label, helperText, defaultValue, ...props }: SelectProps,
  ref: ForwardedRef<HTMLSelectElement>
) => {
  const id = useId();

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.target.setAttribute(
      "data-selected",
      event.target.value ? "true" : "false"
    );
    if (props.onChange) props.onChange(event);
  };

  return (
    <div className="my-2.5">
      <div className="relative">
        <select
          {...props}
          ref={ref}
          id={id}
          aria-invalid={helperText ? "true" : "false"}
          data-selected={defaultValue ? "true" : "false"}
          onChange={handleOnChange}
          className={`block peer appearance-non bg-white-50 rounded-md px-3 pb-2.5 pt-4 w-full text-base text-black-800 border-2 focus:outline-none focus:ring-0 focus:border-fire-bush-400 ${
            helperText ? "border-valencia-600" : "border-black-300"
          }`}
        >
          {children}
        </select>
        <label
          htmlFor={id}
          className={`absolute rounded-md text-xl text-black-500 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] bg-white-50 mx-2 px-1 peer-data-[selected=false]:scale-100 peer-data-[selected=false]:-translate-y-1/2 peer-data-[selected=false]:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-6 left-1 pointer-events-none ${
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

export default forwardRef(Select);
