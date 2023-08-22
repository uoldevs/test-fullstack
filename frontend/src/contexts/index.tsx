import { ClientStatusProvider } from "./clientStatus";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ClientStatusProvider>{children}</ClientStatusProvider>;
};
