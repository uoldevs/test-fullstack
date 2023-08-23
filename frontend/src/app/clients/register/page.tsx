import Form from "@/components/Form";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cadastro de Cliente",
  description: "Cadastro de Cliente",
};

export default function Register() {
  const formBackButton = (
    <Link href="/">
      <button
        type="button"
        className="w-36 border-2 p-2 rounded-md text-lg text-fire-bush-400 hover:text-black-50 hover:bg-fire-bush-400 border-fire-bush-400 active:bg-fire-bush-500 active:border-fire-bush-500"
      >
        Voltar
      </button>
    </Link>
  );

  return (
    <main>
      <div>
        <h2 className="text-lg font-medium text-black-800 pt-4">
          Novo usuário
        </h2>
        <p className="text-black-600">
          Informe os campos a seguir para criar novo usuário
        </p>
      </div>
      <Form backButton={formBackButton} />
    </main>
  );
}