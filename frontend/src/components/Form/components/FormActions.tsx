import React from "react";

type FormActionsProps = React.HTMLAttributes<HTMLDivElement>;

export default function FormActions({ children }: FormActionsProps) {
  return <div className="flex justify-center gap-3 my-10">{children}</div>;
}
