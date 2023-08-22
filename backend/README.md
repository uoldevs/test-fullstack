# Backend - Teste UOL - Cadastro de Clientes

Este é o backend da aplicação UOL, uma API que oferece endpoints para gerenciar informações de clientes. A API foi construída usando Node.js e express.js, e os dados dos clientes são armazenados de forma persistente usando o SQLite.

## Como Rodar a Aplicação

Para rodar a aplicação, siga os seguintes passos:

1. No terminal, navegue até a pasta raiz do projeto `uol-backend`.

2. Instale as dependencias do projeto:

   ```bash
   npm install
   ```

3. Inicie o servidor com o comando:

   ```bash
   npm run dev
   ```

_Isso iniciará o servidor na porta definida (porta 3001)._

Com o servidor iniciado, o frontend pode acessar a API por meio do CORS. Foi aplicada a permissão CORS para permitir que o frontend em localhost:3000 acesse a API sem problemas.
Testes foram implementados para o backend usando as bibliotecas chai, chaiHttp e mocha. Os testes cobrem 100% das funcionalidades do backend, garantindo a robustez e qualidade do código.

Para executar os testes, siga os passos abaixo:

1. Certifique-se de que o servidor esteja iniciado.

2. No terminal, navegue até a pasta raiz do projeto uol-backend.

3. Execute o comando:

   ```bash
    npm test
   ```

## Requisitos do Backend
O backend cumpre os seguintes requisitos:

1. Listagem de Clientes Cadastrados: A API oferece um endpoint para obter a listagem de clientes cadastrados.

2. Cadastro de Novo Cliente: A API permite cadastrar um novo cliente com informações válidas.

3. Atualização de Informações de Cliente: É possível atualizar informações de clientes existentes.

4. Armazenamento Persistente: Os dados dos clientes são armazenados de forma persistente usando o SQLite.
