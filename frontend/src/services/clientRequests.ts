
async function getClientsData() {
  const response = await fetch(`http://localhost:3001/clients`);
  if (!response.ok) {
    throw new Error(`Failed to fetch clients`);
  }
  const data = await response.json();
  return data;
}

export default getClientsData;