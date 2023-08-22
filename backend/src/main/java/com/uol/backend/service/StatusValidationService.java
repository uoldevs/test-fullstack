package com.uol.backend.service;

import com.uol.backend.model.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StatusValidationService {

    public Optional isValidStatus(String value, Class<? extends Enum<?>> enumClass) {
        if (value == null) {
            return Optional.empty();
        }

        for (Enum<?> enumValue : enumClass.getEnumConstants()) {
            if (enumValue.name().equalsIgnoreCase(value)) {
                return Optional.of(enumValue);
            }
        }

        return Optional.empty();
    }
}
