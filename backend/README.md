## Sobre

API RESTful para gerenciamento de clientes. A API foi desenvolvida utilizando Node.js, TypeScript, Express.js e Prisma ORM. O banco de dados utilizado foi o SQLite. Ao utilizar a API é possível criar, listar e atualizar clientes, também é possível listar os status disponíveis.

## Ferramentas/Tecnologias utilizadas

- Ubuntu v22.04
- Node.js v16.20
- TypeScript v5.1
- Express.js v4.18
- Prisma ORM v5.1

## Como executar

Siga os passos abaixo executando os comandos no terminal.

1. Clone o repositório na branch `jonathan-andrade`.

   - Exemplo com Git + HTTPS
     ```
     git clone --branch jonathan-andrade https://github.com/Jonathan-R-Andrade/test-fullstack.git
     ```
   - Exemplo com Git + SSH
     ```
     git clone --branch jonathan-andrade git@github.com:Jonathan-R-Andrade/test-fullstack.git
     ```
   - Usando GitHub CLI
     ```
     gh repo clone Jonathan-R-Andrade/test-fullstack -- --branch jonathan-andrade
     ```

2. Entre na pasta `backend` do repositório clonado.

   ```
   cd test-fullstack/backend
   ```

3. Instale as dependências.

   ```
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto utilizando o arquivo de exemplo `.env.example`.

   ```
   cp .env.example .env
   ```

5. Crie o banco de dados e as tabelas.

   ```
   npm run prisma:migrate:dev
   ```

   > Ao executar esse comando a tabela `status` será populada com os valores necessários para o funcionamento da API.

6. Inicie o servidor.

   ```
   npm run dev
   ```

7. Acesse a API nas rotas:

   - `http://localhost:3001/api/v1/clients` - Operações relacionadas a clientes.
   - `http://localhost:3001/api/v1/status` - Operações relacionadas a status do cliente.

## O que a API espera receber e retorna

<details>

  <summary><h4>Erros</h4></summary>

Para todos os casos de erro (_códigos de status HTTP 4xx ou 5xx_), a API retorna um objeto com a propriedade `error`, essa propriedade pode ser uma string ou um array de objetos. O array de objetos representa erros de validação de dados, cada objeto é um campo que não passou na validação. A string representa outros tipos de erros.

Exemplo de resposta de erro:

```json
{
  "error": "Id must be a positive integer"
}
```

ou

```json
{
  "error": [
    {
      "code": "too_small",
      "minimum": 3,
      "type": "string",
      "inclusive": true,
      "exact": false,
      "message": "String must contain at least 3 character(s)",
      "path": ["name"]
    },
    {
      "code": "custom",
      "message": "Invalid CPF",
      "path": ["cpf"]
    }
  ]
}
```

</details>

### Clientes

<details>

  <summary><h4>Criar um cliente</h4></summary>

- **Método HTTP:** `POST`

- **Rota:** `/api/v1/clients`

- **Corpo da requisição:**

  ```json
  {
    "name": "Fulano",
    "email": "fulano@email.com",
    "cpf": "12345678911",
    "phoneNumber": "11123456789",
    "statusId": 1
  }
  ```

- **Resposta:**

  ```json
  {
    "id": 1,
    "name": "Fulano",
    "email": "fulano@email.com",
    "cpf": "12345678911",
    "phoneNumber": "11123456789",
    "statusId": 1
  }
  ```

- **Códigos de status HTTP:**

  - `201` - Cliente criado com sucesso.
  - `400` - Requisição inválida. _Dados no corpo da requisição ou ID na URL inválidos._
  - `409` - Cliente já cadastrado.
  - `500` - Erro interno do servidor.

</details>

<details>

  <summary><h4>Listar todos os clientes</h4></summary>

- **Método HTTP:** `GET`

- **Rota:** `/api/v1/clients`

- **Resposta:**

  ```json
  [
    {
      "id": 1,
      "name": "Fulano",
      "email": "fulano@email.com",
      "cpf": "12345678911",
      "phoneNumber": "11123456789",
      "status": {
        "id": 1,
        "name": "Ativo"
      }
    }
  ]
  ```

- **Códigos de status HTTP:**

  - `200` - Clientes listados com sucesso.
  - `500` - Erro interno do servidor.

</details>

<details>

  <summary><h4>Atualizar um cliente</h4></summary>

- **Método HTTP:** `PUT`

- **Rota:** `/api/v1/clients/:id`

- **Corpo da requisição:**

  ```json
  {
    "name": "Fulano",
    "email": "fulano@email.com",
    "cpf": "12345678911",
    "phoneNumber": "11123456789",
    "statusId": 1
  }
  ```

- **Resposta:**

  ```json
  {
    "id": 1,
    "name": "Fulano",
    "email": "fulano@email.com",
    "cpf": "12345678911",
    "phoneNumber": "11123456789",
    "statusId": 1
  }
  ```

- **Códigos de status HTTP:**

- `200` - Cliente atualizado com sucesso.
- `400` - Requisição inválida. _Dados no corpo da requisição ou ID na URL inválidos._
- `404` - Cliente não encontrado.
- `409` - Cliente já cadastrado.
- `500` - Erro interno do servidor.

</details>

### Status

<details>

  <summary><h4>Listar todos os status disponíveis</h4></summary>

- **Método HTTP:** `GET`

- **Rota:** `/api/v1/status`

- **Resposta:**

  ```json
  [
    {
      "id": 1,
      "name": "Ativo"
    },
    {
      "id": 2,
      "name": "Inativo"
    },
    {
      "id": 3,
      "name": "Aguardando ativação"
    },
    {
      "id": 4,
      "name": "Desativado"
    }
  ]
  ```

- **Códigos de status HTTP:**

  - `200` - Status listados com sucesso.
  - `500` - Erro interno do servidor.

</details>
