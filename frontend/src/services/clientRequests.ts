import { DbClient } from "../types";

async function getClientsData() {
  const response = await fetch(`http://localhost:3001/clients`);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`API Error: ${errorMessage}`);
    }
  const data = await response.json();
  return data;
}

async function registerClient(clientData: DbClient) {
  try {
    const response = await fetch(`http://localhost:3001/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(clientData)
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`API Error: ${errorMessage}`);
    }
  } catch(err) {
    if (err instanceof Error) {
      console.log(err);
    } else {
      console.log('Unexpected error', err);
    }
  }
}

async function updateClient(clientData: DbClient) {
  try {
    const response = await fetch(`http://localhost:3001/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(clientData)
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`API Error: ${errorMessage}`);
    }
  } catch(err) {

    if (err instanceof Error) {
      console.log(err);
    } else {
      console.log('Unexpected error', err);
    }
  }
}

export { getClientsData, registerClient, updateClient };