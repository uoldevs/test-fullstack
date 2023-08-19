const Validations = (data) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const validEmail = emailRegex.test(data.email);

  if (data.nome && data.cpf.length === 11 && data.telefone.length > 9 && validEmail) {
    return true;
  }
  return false;
};

export default Validations;
