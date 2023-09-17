import { useId } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import { IMaskInput, IMaskInputProps } from "react-imask";

type FormInputProps<TFieldValues extends FieldValues> =
  IMaskInputProps<HTMLInputElement> & {
    name: Path<TFieldValues>;
    label: string;
  };

export default function FormInput<TFieldValues extends FieldValues>({
  name,
  label,
  ...props
}: FormInputProps<TFieldValues>) {
  const id = useId();

  const {
    register,
    formState: { errors },
  } = useFormContext<TFieldValues>();

  const { onBlur, onChange, ref, disabled } =
    register<Path<TFieldValues>>(name);

  const error = errors[name]?.message;
  const helperText = typeof error === "string" ? error : undefined;

  return (
    <div className="my-6">
      <div className="relative">
        <IMaskInput
          {...props}
          id={id}
          name={name}
          inputRef={ref}
          onBlur={onBlur}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={helperText ? "true" : "false"}
          className="block peer appearance-non bg-white-50 rounded-md px-3 pb-2.5 pt-4 w-full text-base text-black-800 border-2 border-black-300 aria-[invalid=true]:border-valencia-600 focus:outline-none focus:ring-2 ring-fire-bush-700 ring-offset-1"
          placeholder=" "
        />
        <label
          htmlFor={id}
          className="absolute rounded-md text-xl text-black-400 duration-300 transform scale-75 top-0 -translate-y-1/2 peer-focus:scale-75 peer-focus:top-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 z-10 origin-left bg-white-50 mx-2 px-1 left-1 pointer-events-none peer-aria-[invalid=true]:text-valencia-600"
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
