# Backend

## Como executar

```terminal
Instale todas as dependências:
$ cd server && npm install && cd ..

inicie o projeto web:
$ npm run start:dev
```

## Bibliotecas

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/index.html)
- [Class Validator](https://github.com/typestack/class-validator)


## Estrutura do projeto

- src/unit-testing-coverage
  - application/              (Camada de aplicação)
    - entities/               (Definições de entidades do domínio)
    - repositories/           (Acesso e manipulação de dados)
    - usecases/               (Lógica de negócios da aplicação)
  - infrastructure/           (Infraestrutura e implementação)
      - database/             (Acesso ao banco de dados)
        - mapper/             (Transformação de dados)
        - prisma/             (Configurações do Prisma ORM)
      - http                  (Comunicação HTTP)
        - controllers/        (Controladores HTTP para lidar com requisições)
        - dtos/               (Objetos de transferência de dados para HTTP)
        - views/              (Formatação de dados de saída para HTTP)
  - app.module.ts             (Módulo principal da aplicação)
  - main.ts                   (Ponto de entrada da aplicação)
- tests
  - repositories              (Testes e mocks relacionados aos repositórios)


## Resultado dos testes de cobertura
![unit-testing-coverage](./assets/unit-testing-coverage.png)

