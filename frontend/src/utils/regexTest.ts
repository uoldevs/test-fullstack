export interface formCustomer {
  name: string;
  email: string;
  cpf: string;
  telephone: string;
  status: string;
}

const regexTest = (key: keyof formCustomer, value: string): boolean => {
  const regexMap: Record<keyof formCustomer, RegExp> & Record<string, RegExp> = {
    cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    telephone: /^\(\d{2}\) \d{5}-\d{4}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    name: /^.+$/,
    status: /^.+$/
  };

  const regex = regexMap[key];
  if (!regex) {
    return true;
  }

  if (!regex.test(value)) {
    return false;
  }

  return true;
};

export default regexTest;
