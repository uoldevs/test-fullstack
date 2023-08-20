DROP DATABASE IF EXISTS ClientManager;

CREATE DATABASE ClientManager;

USE ClientManager;

CREATE TABLE
    Clients (
        id INT NOT NULL auto_increment,
        name VARCHAR(30) NOT NULL,
        email VARCHAR(30) NOT NULL,
        CPF VARCHAR(30) NOT NULL UNIQUE,
        phonenumber VARCHAR(30) NOT NULL,
        status VARCHAR(30) NOT NULL,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;

INSERT INTO
    ClientManager.client (
        name,
        email,
        CPF,
        phonenumber,
        status
    )
VALUES (
        "John Doe",
        "john_doe@test.com",
        "12345678900",
        "119988745",
        "Ativo"
    ), (
        "John Doe",
        "john_doe@test.com",
        "12345678901",
        "119988743",
        "Inativo"
    ), (
        "John Doe",
        "john_doe@test.com",
        "12345678902",
        "119988742",
        "Aguardando ativação"
    ), (
        "John Doe",
        "john_doe@test.com",
        "12345678903",
        "119988741",
        "Desativado"
    );