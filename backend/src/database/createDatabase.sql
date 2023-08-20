DROP DATABASE IF EXISTS ClientManager;

CREATE DATABASE ClientManager;

USE ClientManager;

CREATE TABLE
    Clients (
        id INT NOT NULL auto_increment,
        name VARCHAR(30) NOT NULL,
        email VARCHAR(50) NOT NULL,
        CPF VARCHAR(30) NOT NULL UNIQUE,
        phonenumber VARCHAR(30) NOT NULL,
        status VARCHAR(30) NOT NULL,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;

INSERT INTO
    ClientManager.Clients (
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
        "1199988745",
        "Ativo"
    ), (
        "John Doe",
        "john_doe@test.com",
        "12345678901",
        "1199988743",
        "Inativo"
    ), (
        "John Doe",
        "john_doe@test.com",
        "12345678902",
        "1199988742",
        "Aguardando ativação"
    ), (
        "John Doe",
        "john_doe@test.com",
        "12345678903",
        "1199988741",
        "Desativado"
    );