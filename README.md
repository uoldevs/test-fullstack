# Aplicativo de Gerenciamento de Clientes

## Descrição:

Aplicativo fullstack que permita aos usuários visualizar e criar clientes.

<h3><strong>Frontend</strong></h3>

- Exibi listagem de clientes.
- Permite criação de um novo cliente.
- Permite atualização dos dados de um cliente.
- Fornece alertas para o usuário em caso de dados inválidos.

<details>
<summary><strong>Ferramentas:</strong></summary>

[Vite](https://vitejs.dev/) <br>
[React](https://react.dev/) <br>
[React Router](https://reactrouter.com/en/main) <br>
[React Icons](https://react-icons.github.io/react-icons/) <br>
[CSS](https://www.w3.org/Style/CSS/Overview.en.html) <br>
[TypeScript](https://www.typescriptlang.org/) <br>
</details>

<br>
<h3><strong>Backend</strong></h3>

**Endpoits:**
- Listar cliente - `/clients`
- Cadastrar um novo cliente com informações válidas - `/create`
- Atualizar informações de cliente existente - `/update`

<details>
<summary><strong>Ferramentas:</strong></summary>

Banco: [SQLite](https://www.sqlite.org/index.html), [Prisma](https://www.prisma.io/) <br>
Linguagem: [Nodejs](https://nodejs.org/it), [TypeScript](https://www.typescriptlang.org/) <br>
Framework web: [Express](https://expressjs.com/pt-br/) <br>
Validação: [Zod](https://zod.dev/), [cpf-cnpj-validator](https://www.npmjs.com/package/cpf-cnpj-validator) <br>
Tratamento erros assíncronos: [Express-async-errors](https://www.npmjs.com/package/express-async-errors)<br>
</details>
<br>

<h3><strong>Testes</strong></h3>

**Backend**

Entre na pasta backend: ```cd backend``` <br>
Para rodar testes com cobertura: ```npm coverage```<br>
Para rodar apenas os testes: ```npm run``` <br>

<details>
<summary><strong>Ferramentas:</strong></summary>

[Mocha](https://mochajs.org/) <br>
[Chai](https://www.chaijs.com/) <br>
[Sinon](https://sinonjs.org/) <br>
[nyc](https://www.npmjs.com/package/nyc) <br>
</details>
<br>

<h2>Como rodar a aplicação ⚙️</h2>

<details>
<summary>Backend:</summary>

Entre na pasta backend:
```
cd backend
```
Instale as depenências:
```
npm install
```
Rode a aplicação:
```
npm run dev
```
URL base: `localhost:3001`

Body rotas POST e PUT:
```
{
    "name": "Bell-mère",
    "email": "bell@gmail.com",
    "cpf": "21219458066",
    "status": "Desativado"
}
```
</details>

<details>
<summary>Frontend:</summary>

Entre na pasta frontend:
```
cd frontend
```
Instale as depenências:
```
npm install
```
Rode a aplicação:
```
npm run dev
```

Vá para `http://localhost:5173/` no navegador.

<br>
</details>
<br>

## Próximos passos 👣
- Testes frontend
- Máscara de CPF e telefone
- Trazer dados do cliente no form na atualização
- Melhorar tratamento de erros
- Dockerização
- Melhorar testes backend