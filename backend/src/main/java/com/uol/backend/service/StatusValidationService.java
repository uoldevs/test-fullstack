package com.uol.backend.service;

import com.uol.backend.model.Status;

import java.util.Optional;

public class StatusValidationService {
    public static Optional isValidStatus(String value, Class<? extends Enum<?>> enumClass) {
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
