package com.uol.backend.service;

import com.uol.backend.controller.payload.CustomerPayload;
import com.uol.backend.model.Customer;
import com.uol.backend.repository.CustomerRepository;
import com.uol.backend.service.exceptions.CustomerAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public void createCostumer(CustomerPayload customerPayload) throws CustomerAlreadyExistsException {
        Optional<Customer> customer = customerRepository
                .findBySocialSecurityNumber(customerPayload.getSocialSecurityNumber());

        if(customer.isPresent()) {
            throw new CustomerAlreadyExistsException("Cliente já cadastrado com este CPF.");
        }

        customerRepository.save(customerPayload.toCustomer());
    }
}
