CREATE TABLE Customer(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email_address VARCHAR(255) NOT NULL,
    social_security_number VARCHAR(20) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    status VARCHAR(10) NOT NULL
);