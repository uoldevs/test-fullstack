# Backend - Teste UOL - Cadastro de Clientes
Este é o backend da aplicação UOL, uma API que gerencia informações de clientes usando Node.js, express.js e armazenamento persistente com SQLite.

## Como Rodar a Aplicação
1. Instale as dependências:

```bash
  npm install
```

2. Inicie o servidor:

```bash
  npm run dev
```

## Testes
Certifique-se de que o servidor esteja iniciado.

1. Execute os testes:

```bash
npm test
```

## Requisitos Atendidos
1. Listagem de Clientes Cadastrados.
2. Cadastro de Novo Cliente.
3. Atualização de Informações de Cliente.
4. Armazenamento Persistente usando SQLite.

#
#
#

# Frontend - Teste UOL - Cadastro de Clientes
Projeto React.js para gerenciar clientes com as seguintes funcionalidades:

* Listagem de clientes.
* Cadastro de novos clientes.
* Validação de CPF e telefone.
* Comunicação com API usando Axios.
* Rodando a Aplicação
  
1. Certifique-se de ter o servidor backend em execução.
2. Instale as dependências:

```bash
npm install
```
3. Inicie a aplicação:

```bash
npm start
```

## Observações
Utiliza Material-UI para um design moderno.
Requisições HTTP à API usando Axios.
Certifique-se de que o servidor backend esteja em execução antes de iniciar o frontend.


#
#
#

# Teste Fullstack: Aplicativo de Gerenciamento de Clientes

## Descrição:

Neste desafio, você deverá desenvolver um aplicativo fullstack que permita aos usuários visualizar e criar clientes. O aplicativo consiste em duas partes: o frontend e o backend. O frontend será responsável pela interface do usuário e a comunicação com a API. O backend será responsável pelo armazenamento e gerenciamento dos dados dos clientes.

## Requisitos do Frontend:

1. Exibir uma listagem de clientes contendo todas as informações conforme o layout fornecido.
2. Permitir a criação de um novo cliente através de um formulário.
3. Na tela de edição, fornecer alertas para o usuário em caso de dados inválidos.
4. Realizar validação de CPF e telefone na tela de edição para garantir dados corretos e consistentes.
5. Comunicar-se com a API para obter os dados dos clientes cadastrados.

## Requisitos do Backend:

Criar uma API que ofereça endpoints para:

1. Obter a listagem de clientes cadastrados.
2. Cadastrar um novo cliente com informações válidas.
3. Atualizar informações de cliente existente.
4. Armazenar os dados do cliente de forma persistente, com sugestão de uso do SQLite para essa finalidade.

## Requisitos de Qualidade de Código:

Escreva um código limpo, legível e bem organizado.
Adote boas práticas de desenvolvimento e arquitetura.

## Itens Desejáveis (opcional):

- Testes unitários
- Bibliotecas ou frameworks adicionais

## Telas:

- [Tela Inicial](https://test-frontend-uolpp.web.app/assets/images/tela-inicial.jpg)
- [Tela de Edição](https://test-frontend-uolpp.web.app/assets/images/tela-edicao.jpg)

## Instruções Finais:

Após concluir o desafio, crie um pull request neste repositório com duas pastas separadas: uma contendo o projeto frontend e outra com o projeto backend, para que possamos avaliar seu trabalho. Boa sorte!
