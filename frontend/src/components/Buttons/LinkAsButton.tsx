import Link from "next/link";
import React, { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const link = tv({
  base: [
    "p-2 rounded-md min-w-fit",
    "flex items-center justify-center",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-fire-bush-700",
  ],
  variants: {
    bgColor: {
      fireBush: [
        "text-white-50 bg-fire-bush-400",
        "hover:bg-fire-bush-500",
        "active:bg-fire-bush-600",
      ],
      white: [
        "text-fire-bush-400 border-2 border-fire-bush-400 bg-white-50",
        "hover:text-white-50 hover:border-none hover:bg-fire-bush-500",
        "active:text-white-50 active:border-none active:bg-fire-bush-600",
      ],
    },
    size: {
      sm: "text-base w-32 h-9",
      md: "text-lg w-36 h-12",
    },
  },
  defaultVariants: {
    bgColor: "fireBush",
    size: "md",
  },
});

interface LinkAsButtonProps
  extends ComponentProps<typeof Link>,
    VariantProps<typeof link> {}

export default function LinkAsButton({
  children,
  bgColor,
  size,
  className,
  ...props
}: LinkAsButtonProps) {
  return (
    <Link {...props} className={link({ bgColor, size, className })}>
      {children}
    </Link>
  );
}
