import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const div = tv({
  base: "w-3 h-3 mr-1.5 rounded-full",
  variants: {
    status: {
      Ativo: "bg-chateau-green-500",
      Inativo: "bg-valencia-600",
      "Aguardando ativação": "bg-galliano-500",
      Desativado: "bg-black-200",
    },
  },
});

interface StatusColorsProps
  extends Partial<Record<"className", string>>,
    VariantProps<typeof div> {}

export default function StatusColors({ status, className }: StatusColorsProps) {
  return <div className={div({ status, className })} />;
}
