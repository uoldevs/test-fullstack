const cpfValidator = (cpf: string) => {
  let sum = 0;

  for (let i = 0; i < 9; i += 1) {
    sum += Number(cpf.charAt(i)) * (10 - i);
  }

  let rest = 11 - (sum % 11);

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== Number(cpf.charAt(9))) {
    return false;
  }

  sum = 0;

  for (let i = 0; i < 10; i += 1) {
    sum += Number(cpf.charAt(i)) * (11 - i);
  }

  rest = 11 - (sum % 11);

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== Number(cpf.charAt(10))) {
    return false;
  }

  return true;
};

export default cpfValidator;
