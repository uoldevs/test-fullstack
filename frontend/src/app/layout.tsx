import { AppProvider } from "@/contexts";
import { Inter } from "next/font/google";
import { User } from "lucide-react";
import "./globals.css";
import logo from "../assets/uol-logo.png";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <AppProvider>
          <header className="bg-black-900 p-3 flex justify-center">
            <Link href="/">
              <Image src={logo} alt="UOL Logo" width={80} />
            </Link>
          </header>
          <div className="max-w-5xl mx-auto">
            <h1 className="flex items-center gap-4 text-black-950 text-2xl font-medium mt-16 pb-4 border-b border-black-200">
              <User size={32} />
              Painel de clientes
            </h1>
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
