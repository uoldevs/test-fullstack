# Aplicativo de Gerenciamento de Clientes

![GIF de aprensentação da página](./assets/presentation.gif)

## Tecnologias Usadas

Testes:
> Jest

DevOps:
> Docker

DataBase:
> SqLite

### Back-End:

> NodeJS, Nest.Js, Prisma ORM, Typescript

### Front-End:

> React, Typescript, Context

## Executando a Aplicação

<details>
  <summary><b>Iniciando o projeto com docker-compose 🐳</b></summary>

  ***⚠️ Para garantir um bom funcionamento é necessário que tenha instalado o docker e o docker-compose nas versões 24.0.5 e 1.29 ou superior respectivamente⚠️***

  1. Clone o projeto

  2. Entre no diretório do projeto

  3. No diretório principal suba os containers

  ```bash
docker-compose -f docker-compose.dev.yml up --build -d
  ```

  5. Quando o processo dos containers estiver acabado acesse a aplicação usando o seguinte endereço

  ```bash
http://localhost:3000
  ```

  6. Para derrubar os containers

  ```bash
docker-compose -f docker-compose.dev.yml down --rmi all --volumes --remove-orphans
  ```

</details>

<br />

Para executar as aplicações com node entre nas pasta do projeto (backend e frontend) para mais informações
