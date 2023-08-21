# Teste Fullstack: Aplicativo de Gerenciamento de Clientes

## Descrição:

Neste desafio, você deverá desenvolver um aplicativo fullstack que permita aos usuários visualizar e criar clientes. O aplicativo consiste em duas partes: o frontend e o backend. O frontend será responsável pela interface do usuário e a comunicação com a API. O backend será responsável pelo armazenamento e gerenciamento dos dados dos clientes.


### Como Executar:

```terminal
Caso queira instanciar um container docker com a aplicação server e web
$ npm run compose:up

Instale todas as dependências:
$ cd web && npm install && cd ..
$ cd server && npm install && cd ..


Inicie o projeto server
$ npm run dev

inicie o projeto web:
$ npm run start:dev
```

## Frontend Requisitos:

- [x] Exibir uma listagem de clientes contendo todas as informações conforme o layout fornecido.
- [x] Permitir a criação de um novo cliente através de um formulário.
- [x] Na tela de edição, fornecer alertas para o usuário em caso de dados inválidos.
- [x] Realizar validação de CPF e telefone na tela de edição para garantir dados corretos e consistentes.
- [x] Comunicar-se com a API para obter os dados dos clientes cadastrados.

## Backend Requisitos:

Criar uma API que ofereça endpoints para:

- [x] Obter a listagem de clientes cadastrados.
- [x] Cadastrar um novo cliente com informações válidas.
- [x] Atualizar informações de cliente existente.
- [x] Armazenar os dados do cliente de forma persistente, com sugestão de uso do SQLite para essa finalidade.

### Itens Desejáveis (opcional):

- [x] Testes unitários (backend e frontend)
- [x] Bibliotecas ou frameworks adicionais
- [x] Testes de integração (frontend)
- [x] Teste e2e frontend
- [x] workflow
- [x] container docker com web e server

### Telas:

- [Tela Inicial](https://test-frontend-uolpp.web.app/assets/images/tela-inicial.jpg)
- [Tela de Edição](https://test-frontend-uolpp.web.app/assets/images/tela-edicao.jpg)

### Instruções Finais:

Após concluir o desafio, crie um pull request neste repositório com duas pastas separadas: uma contendo o projeto frontend e outra com o projeto backend, para que possamos avaliar seu trabalho. Boa sorte!
