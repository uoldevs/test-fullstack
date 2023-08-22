import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="w-36 p-2 rounded-md text-lg text-black-50 bg-fire-bush-400 hover:bg-fire-bush-400 active:bg-fire-bush-600"
    >
      {children}
    </button>
  );
}
