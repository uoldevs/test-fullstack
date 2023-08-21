# Teste Fullstack: Aplicativo de Gerenciamento de Clientes

#### Olá, me chamo Daniel Hott e esta é uma aplicação fullstack com possibilidade de listar, criar e editar usuários num painel de clientes.

### Tecnologias: 

#### Frontend: 

React.js com Typescript e styled-components.

#### Backend:

Node.js com Typescript, express, cors, dotenv, sequelize e testes com Jest.

#### Banco de dados:

Postgres:10.17

#### Docker:

Docker-compose para buildar e subir a aplicação em qualquer máquina.

### Prints da aplicação:

#### Tela inicial "/" -  Na página inicial, há a possibilidade de visualizar todos os clientes, cadastrar um novo cliente ou editar um cliente cadastrado.

![Web 1](https://github.com/DanielHott/imagens/blob/master/uol_inicial2.png)

#### Tela de cadastro "/cadastrate"-  Na página de criar usuário, há a possibilidade de criar um novo cadastro de cliente ou editá-lo caso na tela inicial tenha clicado em "editar".

![Web 1](https://github.com/DanielHott/imagens/blob/master/uol_cadastrate.png)

![Web 1](https://github.com/DanielHott/imagens/blob/master/uol_edit.png)


### No Back-end:

#### (GET) Na rota "/get-users" permite ao usuário listar todos os usuários disponíveis.

#### (POST) Na rota "/create-user" permite ao usuário cadastrar um novo usuário no banco de dados.

#### (PUT) Na rota "/update-user" permite ao usuário atualizar qualquer informação do usuário por seu id.


## Coverage: 

#### Nos testes no backend utilizei o Jest, supertest e babel. 

![Web 1](https://github.com/DanielHott/imagens/blob/master/uol_test2.png)

### Para rodar a aplicação, deve ter o docker instalado na máquina.

#### Passos para rodar a aplicação:

1 - Vá pelo terminal até a pasta `test-fullstack`

2 - Certifique que não há nada rodando nos endpoints: `http://localhost:3000/` e `http://localhost:6586/`

2 - Rode o comando `sudo docker-compose build`

3 - Rode o comando `sudo docker-compose up`

4 - Após o processo de configuração do conteiner, confira a aplicação frontend rodando em `http://localhost:3000/` e backend rodando em `http://localhost:6586/`

#### Meus dados:

Linkedin: `https://www.linkedin.com/in/danielhott/`;

Github: `https://github.com/DanielHott`;
