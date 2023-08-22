import type { Metadata } from "next";
import Link from "next/link";
import ClientList from "@/components/ClientList";

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
        <Link href="/clients/register">
          <button
            type="button"
            className="mx-3 w-32 p-1 rounded-md text-lg text-black-50 bg-fire-bush-400 hover:bg-fire-bush-500 active:bg-fire-bush-600"
          >
            Novo cliente
          </button>
        </Link>
      </div>
      <ClientList />
    </main>
  );
}
