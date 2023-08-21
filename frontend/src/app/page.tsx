import type { Metadata } from "next";
import Link from "next/link";
import ClientList from "@/components/ClientList";

export const metadata: Metadata = {
  title: "Lista de Clientes",
  description: "Lista de Clientes",
};

export default function Home() {
  return (
    <main>
      <div>
        <h2>Listagem de usuários</h2>
        <p>Escolha um cliente para visualizar os detalhes</p>
        <Link href="/clients/register">
          <button type="button">Novo cliente</button>
        </Link>
      </div>
      <ClientList />
    </main>
  );
}
