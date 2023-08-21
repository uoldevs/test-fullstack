export const findManyMock = [
  {
    id: 1,
    name: "Bell-mère",
    email: "bell@gmail.com",
    cpf: "21219458066",
    phone: "51998925698",
    status: "Desativado",
  },
  {
    id: 2,
    name: "Brook",
    email: "brook@gmail.com",
    cpf: "41073821099",
    phone: "51999925698",
    status: "Aguardando ativação",
  },
  {
    id: 3,
    name: "Monkey D. Luffy",
    email: "luffy@gmail.com",
    cpf: "03972100000",
    phone: "51977925698",
    status: "Ativo",
  },
  {
    id: 4,
    name: "Tony Tony Chopper",
    email: "chopper@gmail.com",
    cpf: "43820257020",
    phone: "11988925698",
    status: "Ativo",
  },
];

export const clientMock = {
  id: 1,
  name: "Bell-mère",
  email: "bell@gmail.com",
  cpf: "21219458066",
  phone: "51998925698",
  status: "Desativado",
};

export const clientNoIdMock = {
  name: "Bell-mère",
  email: "bell@gmail.com",
  cpf: "21219458066",
  phone: "51998925698",
  status: "Desativado",
};

export const badClientCPFNoIdMock = {
  name: "Bell-mère",
  email: "bell@gmail.com",
  cpf: "",
  phone: "51998925698",
  status: "Desativado",
};

export const updatedClientMock = {
  id: 1,
  name: "Bell-mère",
  email: "bell@gmail.com",
  cpf: "21219458066",
  phone: "51998925698",
  status: "Ativo",
};

export const badClientemailNoIdMock = {
  name: "Bell-mère",
  email: "bell@",
  cpf: "21219458066",
  phone: "51998925698",
  status: "Desativado",
};
