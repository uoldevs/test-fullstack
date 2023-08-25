## Sobre

Aplicação web para gerenciamento de clientes. A aplicação foi desenvolvida utilizando Next.js, TypeScript e Tailwind CSS. Ao utilizar a aplicação é possível criar, listar e atualizar clientes.

## Ferramentas/Tecnologias utilizadas

- Ubuntu v22.04
- Node.js v16.20
- TypeScript v5.1
- Next.js v13.4
- Tailwind CSS v3.3

## Como executar

Siga os passos abaixo executando os comandos no terminal.

> :warning: Antes de executar os passos abaixo, entre na pasta `backend` e siga os passos descritos no arquivo `README.md` para executar a API que será utilizada pela aplicação.

1. Clone o repositório na branch `jonathan-andrade` (**caso já tenha clonado o repositório, entre na pasta `frontend` e siga a partir do passo 3**).

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

2. Entre na pasta `frontend` do repositório clonado.

   ```
   cd test-fullstack/frontend
   ```

3. Instale as dependências.

   ```
   npm install
   ```

4. Crie um arquivo `.env.local` na raiz do projeto utilizando o arquivo de exemplo `.env`.

   ```
   cp .env .env.local
   ```

5. Inicie a aplicação.

   ```
   npm run dev
   ```

6. Acesse a aplicação em `http://localhost:3000`.
