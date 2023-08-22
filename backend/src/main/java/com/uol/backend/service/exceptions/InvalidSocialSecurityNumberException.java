package com.uol.backend.service.exceptions;

public class InvalidSocialSecurityNumberException extends Exception{
    public InvalidSocialSecurityNumberException(String message) {
        super(message);
    }
}
