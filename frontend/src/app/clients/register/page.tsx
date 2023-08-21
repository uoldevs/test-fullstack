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
      <button type="button">Voltar</button>
    </Link>
  );

  return (
    <main>
      <div>
        <h2>Novo usuário</h2>
        <p>Informe os campos a seguir para criar novo usuário</p>
      </div>
      <Form backButton={formBackButton} />
    </main>
  );
}
