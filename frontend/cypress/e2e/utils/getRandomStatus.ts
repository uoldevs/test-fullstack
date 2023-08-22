const statusArray = ['Ativo', 'Inativo', 'Aguardando ativação', 'Desativado'];

export default function getRandomStatus() {
  const randomIndex = Math.floor(Math.random() * statusArray.length);
  return statusArray[randomIndex];
}