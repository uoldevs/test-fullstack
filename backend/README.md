# Customers Manager API

> O Customers Manager é uma aplicação web que te ajuda a gerenciar seus clientes.

## 🛠️ Tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/) (Framework de Node.js)
- [Prisma](https://www.prisma.io/) (ORM)
- [SQLite](https://www.sqlite.org/index.html) (Banco de dados)

## 🌱 Pré-requisitos

- Instale a última versão do [Node](https://nodejs.org/en/);
- O gerenciador de pacotes utilizado no projeto é o [pnpm](https://pnpm.io/pt/) mas fique a vontade para usar `npm` ou `yarn` se desejar;
- Para clonar o repositório instale e configure o [git](https://git-scm.com/);
- Para testar os endpoints use uma ferramenta de requisições como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/);

## ▶️ Executando o projeto localmente

### Abra um terminal e faça o clone do projeto em sua máquina

```bash
git clone https://github.com/uoldevs/test-fullstack.git

# Se você tem uma chave SSH configurada
git clone git@github.com:uoldevs/test-fullstack.git
```

### Navegue até o diretório do projeto clonado

```bash
cd test-fullstack/backend
```

### Instale as dependências do projeto

```bash
# pnpm
pnpm install

# npm
npm install

# yarn
yarn
```

#### Inicie o processo de build do projeto e aguarde até estar finalizado

```bash
# pnpm
pnpm build

# npm
npm run build

# yarn
yarn build
```

#### Inicie o projeto

```bash
# pnpm
pnpm start

# npm
npm start

# yarn
yarn start
```

#### Você verá algo parecido com isso no terminal

<img src="./assets/start-terminal.png" alt="Terminal start">

### Pronto, nosso backend está rodando! Para testar o funcionamento acesse `http://localhost:3001` pelo navegador ou por algum software de requisições como o [Insomnia](https://insomnia.rest/)
#### O seguinte retorno é esperado
<img src="./assets/api-version.png" alt="Terminal start">

## 🚀 Endpoints

#### `POST /customers` - Cadastrar um novo cliente

- Este endpoint espera o seguinte formato de body

  ```bash
  {
    "name": "Customer Name",
    "email": "customer.name@email.com",
    "taxId": "12345678901",
    "phone": "98765432101",
    "status": "Aguardando Ativação"
  }
  ```

#### `GET /customers` - Exibir listagem dos clientes

- O retorno esperado é uma listagem de todos os clientes cadastrados
  ```bash
  [
  	{
  		"id": 1,
  		"name": "Samuel da Silva Pereira",
  		"email": "samuel.pereira@gmail.com",
  		"taxId": "12345678901",
  		"phone": "12345678901",
  		"status": "Ativo"
  	},
  	{
  		"id": 2,
  		"name": "Samuel Pereira",
  		"email": "samuel.pereira2@gmail.com",
  		"taxId": "12345678902",
  		"phone": "12345678901",
  		"status": "Inativo"
  	},
  	{
  		"id": 3,
  		"name": "Walmir Junior",
  		"email": "walmir.santos0@gmail.com",
  		"taxId": "33333333490",
  		"phone": "33333333490",
  		"status": "Aguardando Ativação"
  	}
  ]
  ```

#### `GET /customers/:id` - Exibir informações de um cliente específico

- O retorno esperado é um objeto com as informações do cliente desejado
  ```bash
  {
  	"id": 1,
  	"name": "Samuel da Silva Pereira",
  	"email": "samuel.pereira@gmail.com",
  	"taxId": "12345678901",
  	"phone": "12345678901",
  	"status": "Ativo"
  }
  ```

#### `PATCH /customers/:id` - Atualizar informações de um cliente

- Este endpoint espera o seguinte formato de body
  ```bash
  {
  	"name": "Samuel da Silva atualizado",
  	"email": "samuel.pereira@gmail.com",
  	"taxId": "12345678901",
  	"phone": "12345678901",
  	"status": "Ativo"
  }

  # Todos os campos são opcionais então se você deseja alterar apenas o nome do cliente, por exemplo, basta enviar esta informação no body:

  {
    "name": "Samuel da Silva atualizado"
  }

  ```

## 🧪 Executando os testes do projeto
O Customer Manager possui testes unitários. Para executa-los abra um terminal na raiz do projeto e rode o seguinte comando:
```bash
# pnpm
pnpm test:watch

# npm
npm run test:watch

# yarn
yarn test:watch
```
#### Você verá algo parecido com isso no terminal
<img src="./assets/tests-terminal.png" alt="Terminal test">

## 👨‍💻 Desenvolvedor

<a href="https://www.linkedin.com/in/spsam/">
  <img src="https://avatars.githubusercontent.com/u/72403810?v=4" width="100px" alt="Imagem de Samuel Pereira">
  <br>
  <b>Samuel Pereira</b>
</a>

## 🖋️ Licença

Este projeto é um desafio técnico para um processo seletivo da empresa [UOL](https://www.uol.com.br/), portanto não possui fins lucrativos e não está licenciado.

[⬆️ Voltar ao topo](#customers-manager-api)
<br>
