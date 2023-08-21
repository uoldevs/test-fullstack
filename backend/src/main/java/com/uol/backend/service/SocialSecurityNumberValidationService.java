package com.uol.backend.service;

import br.com.caelum.stella.ValidationMessage;
import br.com.caelum.stella.validation.CPFValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SocialSecurityNumberValidationService {

    private CPFValidator cpfValidator;

    @Autowired
    public SocialSecurityNumberValidationService(CPFValidator cpfValidator) {
        this.cpfValidator = cpfValidator;
    }

    public Optional<Boolean> isValid(String socialSecurityNumber) {
        List<ValidationMessage> errors = cpfValidator.invalidMessagesFor(socialSecurityNumber);

        return errors.isEmpty() ? Optional.of(true) : Optional.empty();
    }
}
