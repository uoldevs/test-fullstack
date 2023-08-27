import { SelectHTMLAttributes, useId } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";

type FormSelectProps<TFieldValues extends FieldValues> =
  SelectHTMLAttributes<HTMLSelectElement> & {
    name: Path<TFieldValues>;
    label: string;
    options: string[];
  };

export default function FormSelect<TFieldValues extends FieldValues>({
  children,
  name,
  label,
  options,
  ...props
}: FormSelectProps<TFieldValues>) {
  const id = useId();

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<TFieldValues>();

  const valueSelected = watch(name);

  const error = errors[name]?.message;
  const helperText = typeof error === "string" ? error : undefined;

  return (
    <div className="my-2.5">
      <div className="relative">
        <select
          {...props}
          {...register<Path<TFieldValues>>(name)}
          id={id}
          aria-invalid={helperText ? "true" : "false"}
          data-selected={valueSelected ? "true" : "false"}
          className={`block peer appearance-non bg-white-50 rounded-md px-3 pb-2.5 pt-4 w-full text-base text-black-800 border-2 focus:outline-none focus:ring-0 focus:border-fire-bush-400 ${
            helperText ? "border-valencia-600" : "border-black-300"
          }`}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label
          htmlFor={id}
          className={`absolute rounded-md text-xl text-black-500 duration-300 transform scale-100 top-1/2 -translate-y-1/2 peer-focus:scale-75 peer-focus:top-0 peer-data-[selected=true]:scale-75 peer-data-[selected=true]:top-0 z-10 origin-[0] bg-white-50 mx-2 px-1 left-1 pointer-events-none ${
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
}
