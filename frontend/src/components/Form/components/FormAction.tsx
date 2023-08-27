import React from "react";

type FormActionProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function FormAction({ children, ...props }: FormActionProps) {
  return (
    <button
      {...props}
      className="w-36 p-2 rounded-md text-lg text-black-50 bg-fire-bush-400 hover:bg-fire-bush-400 active:bg-fire-bush-600"
    >
      {children}
    </button>
  );
}
