import { AppProvider } from "@/contexts";
import { Inter } from "next/font/google";
import { User } from "lucide-react";
import "./globals.css";
import logo from "../assets/uol-logo.png";
import Image from "next/image";

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
          <header>
            <Image src={logo} alt="UOL Logo" width={80} />
          </header>
          <h1>
            <User />
            Painel de clientes
          </h1>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
