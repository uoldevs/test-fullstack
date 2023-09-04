"use client";

import React, { createContext, useEffect, useState } from "react";
import { listStatus } from "@/services/clientAPI/endpoints/status";
import { Status } from "@/services/clientAPI/endpoints/status/types";
import { ClientAPIResponse } from "@/services/clientAPI/utils/handleAPIResponse";

interface ClientStatusContextData {
  clientStatus: ClientAPIResponse<Status[]> | null;
}

const clientStatusContext = createContext<ClientStatusContextData>({
  clientStatus: null,
});

const ClientStatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [status, setStatus] = useState<ClientAPIResponse<Status[]> | null>(
    null
  );

  useEffect(() => {
    listStatus().then((response) => setStatus(response));
  }, []);

  return (
    <clientStatusContext.Provider value={{ clientStatus: status }}>
      {children}
    </clientStatusContext.Provider>
  );
};

export { clientStatusContext, ClientStatusProvider };
