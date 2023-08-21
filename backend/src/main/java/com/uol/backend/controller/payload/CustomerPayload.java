package com.uol.backend.controller.payload;

import com.uol.backend.model.Customer;
import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class CustomerPayload {

    @Size(min = 3, max = 70, message = "The full name must be from 3 to 70 characters.")
    @NotNull(message = "The full name is required.")
    private String fullName;

    @NotEmpty(message = "The email is required.")
    @Email(message = "The email is not a valid email.")
    private String email;

    @NotNull(message = "The Social Security Number is required.")
    @Size(min = 11, max = 11, message = "A valid Social Security Number is required.")
    private String socialSecurityNumber;

    @NotNull(message = "The phone number is required.")
    @Size(min = 10, max = 11, message = "A valid phone number is required.")
    private String phone;

    @NotNull(message = "The status definition is required.")
    @NotEmpty(message = "The status definition is required.")
    private String status;

    public Customer toCustomer() {
        Customer customer = new Customer();
        customer.setFullName(this.fullName);
        customer.setEmail(email);
        customer.setSocialSecurityNumber(socialSecurityNumber);
        customer.setPhone(phone);
        customer.setStatus(status);

        return customer;
    }
}
