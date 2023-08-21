const URL = 'http://127.0.0.1:3005';

export async function clientApi() {
  try {
    const response = await fetch(`${URL}/clients`);
    return response.json();
  } catch (e) {
    alert('Serviço indisponível');
    return [];
  }
}

export async function addClient(client) {
  const response = await fetch(`${URL}/clients`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: client.name,
      email: client.email,
      cpf: client.cpf,
      phone: client.phone,
      status: client.status,
    }),
  });
  return response.json();
}

export async function updateClient(client) {
  const response = await fetch(`${URL}/clients/${client.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: client.name,
      email: client.email,
      cpf: client.cpf,
      phone: client.phone,
      status: client.status,
    }),
  });
  return response.json();
}