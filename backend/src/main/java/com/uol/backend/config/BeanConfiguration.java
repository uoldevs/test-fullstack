package com.uol.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import br.com.caelum.stella.validation.CPFValidator;

@Configuration
public class BeanConfiguration {

    @Bean
    public CPFValidator cpfValidator() {
        return new CPFValidator();
    }
}