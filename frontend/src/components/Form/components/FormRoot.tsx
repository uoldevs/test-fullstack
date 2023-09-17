import React from "react";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  Resolver,
  SubmitErrorHandler,
  SubmitHandler,
  ValidationMode,
  useForm,
} from "react-hook-form";

type FormRootProps<TFieldValues extends FieldValues> =
  React.FormHTMLAttributes<HTMLFormElement> & {
    mode?: keyof ValidationMode;
    defaultValues?: DefaultValues<TFieldValues>;
    resolver?: Resolver<TFieldValues>;
    onValid?: SubmitHandler<TFieldValues>;
    onInvalid?: SubmitErrorHandler<TFieldValues>;
  };

export default function FormRoot<TFieldValues extends FieldValues>({
  children,
  mode = "onTouched",
  defaultValues,
  resolver,
  onValid,
  onInvalid,
  ...props
}: FormRootProps<TFieldValues>) {
  const methods = useForm<TFieldValues>({
    mode,
    defaultValues,
    resolver,
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form {...props} onSubmit={onValid && handleSubmit(onValid, onInvalid)}>
        {children}
      </form>
    </FormProvider>
  );
}
