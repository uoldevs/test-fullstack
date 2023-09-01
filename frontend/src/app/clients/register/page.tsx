import LinkAsButton from "@/components/Buttons/LinkAsButton";
import ClientForm from "@/components/ClientForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastro de Cliente",
  description: "Cadastro de Cliente",
};

export default function Register() {
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
      <ClientForm className="max-w-sm my-10">
        <LinkAsButton href="/" bgColor="white">
          Voltar
        </LinkAsButton>
      </ClientForm>
    </main>
  );
}
