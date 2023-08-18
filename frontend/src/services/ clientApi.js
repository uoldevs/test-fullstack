const URL = 'http://127.0.0.1:3005';

export async function clientApi() {
  try {
    const response = await fetch(`${URL}/clients`);
    console.log(response);
    return response.json();
  } catch (e) {
    console.log(e.message);
    alert('Serviço indisponível');
    return [];
  }
}

export async function addClient(todo) {
  const response = await fetch(`${URL}/clients`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      value: todo,
      checked: false,
    }),
  });
  return response.json();
}

export async function updateTodo(todo) {
  // console.log(todo);
  const response = await fetch(`${URL}/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  return response.json();
}