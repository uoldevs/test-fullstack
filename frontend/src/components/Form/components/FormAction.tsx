import PrimaryButton from "@/components/Buttons/PrimaryButton";
import React from "react";

type FormActionProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function FormAction({ children, ...props }: FormActionProps) {
  return <PrimaryButton {...props}>{children}</PrimaryButton>;
}
