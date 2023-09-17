import type { Metadata } from "next";
import ClientList from "@/components/ClientList";
import LinkAsButton from "@/components/Buttons/LinkAsButton";

export const metadata: Metadata = {
  title: "Lista de Clientes",
  description: "Lista de Clientes",
};

export default function Home() {
  return (
    <main className="pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-medium text-black-800 pt-4">
            Listagem de usuários
          </h2>
          <p className="text-black-600">
            Escolha um cliente para visualizar os detalhes
          </p>
        </div>
        <LinkAsButton href="/clients/register" size="sm" className="mx-3">
          Novo cliente
        </LinkAsButton>
      </div>
      <ClientList />
    </main>
  );
}
