package com.uol.backend.service.exceptions;

public class CustomerAlreadyExistsException extends Exception{
    public CustomerAlreadyExistsException(String message) {
        super(message);
    }
}
