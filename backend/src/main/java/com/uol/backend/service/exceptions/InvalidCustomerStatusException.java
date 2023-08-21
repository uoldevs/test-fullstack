package com.uol.backend.service.exceptions;

public class InvalidCustomerStatusException extends Exception{
    public InvalidCustomerStatusException(String message) {
        super(message);
    }
}
