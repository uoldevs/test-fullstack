# Teste Fullstack: Aplicativo de Gerenciamento de Clientes

## About project:

<img src="https://github.com/rtxnak/test-fullstack/assets/88905400/26e82d17-f7f3-4aef-a5e3-cefc96175410" alt="edit-page" width="300"/>
<img src="https://github.com/rtxnak/test-fullstack/assets/88905400/3335d60e-9af9-493c-8fa9-e381749ed256" alt="new-page" width="300"/>
<img src="https://github.com/rtxnak/test-fullstack/assets/88905400/3f105d79-beea-497b-8f1b-4cd33520ab33" alt="edit-page" width="300"/>

This project was developed to a technical test with the [Skills](#skills).

It is a system that allows users to view the list of customers, create and edit customer data through a form.

In the registration/editing form, all fields must be completed, and in the case of the CPF, a valid number is required.

All customer data is persistently stored in a database.

The Project was based on the initial instructions of the repository: https://github.com/uoldevs/test-fullstack

## Skills 
On FrontEnd:
 - Functional Programming in Javascript is the base language;
 - ReactJs/NextJs and Tailwindcss to create the pages;
 - Axios to do the API connection;
 - Jest/RTL to create unit tests;

On BackEnd:
 - OOP in Typescript is the base language;
 - NestJs framework from Node.js;
 - ODM library typeORM for SQLite database connection;
 - Jest to create unit tests;

## Opening the app locally
 
On terminal:

1. Please install and check the version of the following services on your system:

[NPM & Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
```bash
  npm -v
```
```bash
  node -v
```

[Docker](https://docs.docker.com/get-docker/)
```bash
  docker -v
```
[Docker-Compose](https://docs.docker.com/compose/install/)
```bash
  docker-compose -v
```

2. Clone the repository in your preferred folder
```bash
  git clone git@github.com:rtxnak/test-fullstack.git
```

3. Move to app folder
```bash
  cd test-fullstack/ 
```
4. Install the dependencies
  * move to frontend folder:
    ```bash
       cd frontend/
    ```
  * Install dependencies:
    ```bash
       npm install  
    ```
  * move back folder:
    ```bash
       cd ..
    ```
  * move to frontend folder:
    ```bash
       cd backend/
    ```
  * Install dependencies:
    ```bash
       npm install  
    ```
  * move back folder:
    ```bash
       cd ..
    ```

5. Run the application with docker-compose
```bash
  npm run compose:up
```

6. The application can be accessed through:

    http://localhost:3000/

7. Finishing the application
```bash
  npm run compose:down
```
8. To run tests:
  * move to frontend or backend folder:
    ```bash
       cd frontend/
    ```
    ```bash
       cd backend/
    ```
  * Unit tests:
    ```bash
       npm run test
    ```
