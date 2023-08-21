package com.uol.backend.service;

import com.uol.backend.controller.payload.CustomerPayload;
import com.uol.backend.model.Customer;
import com.uol.backend.model.Status;
import com.uol.backend.repository.CustomerRepository;
import com.uol.backend.service.exceptions.InvalidCustomerStatusException;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public void createCostumer(CustomerPayload customerPayload) throws EntityExistsException, InvalidCustomerStatusException{
        Optional<Customer> customer = customerRepository
                .findBySocialSecurityNumber(customerPayload.getSocialSecurityNumber());

        if(customer.isPresent()) {
            throw new EntityExistsException("Cliente já cadastrado com este CPF.");
        }

        Optional<Status> status = StatusValidationService.isValidStatus(
                customerPayload.getStatus(), Status.class
        );

        if(status.isEmpty()) {
            throw new InvalidCustomerStatusException("Status não suportado.");
        }

        customerRepository.save(customerPayload.toCustomer());
    }

    public List<Customer> findAllCustomers() throws EntityNotFoundException {
        List<Customer> customers = customerRepository.findAll();

        if(customers.isEmpty()) {
            throw new EntityNotFoundException("Nenhum cliente cadastrado.");
        }

        return customers;
    }

    public Customer findCustomerById(Long customerId) throws EntityNotFoundException {
        Optional<Customer> customer = customerRepository.findById(customerId);

        if(customer.isEmpty()) {
            throw new EntityNotFoundException("Nenhum cliente cadastrado com este ID.");
        }

        return customer.get();
    }

    public void updateCustomer(CustomerPayload customerPayload, Long customerId) throws EntityNotFoundException, EntityExistsException {
        Optional<Customer> customerWithGivenId = customerRepository.findById(customerId);

        if(customerWithGivenId.isEmpty()) {
            throw new EntityNotFoundException("Nenhum cliente cadastrado com este ID.");
        }

        Optional<Customer> customerWithGivenSSN =
                customerRepository
                        .findBySocialSecurityNumber(customerPayload.getSocialSecurityNumber());

        if(customerWithGivenSSN.isPresent()) {
            throw new EntityExistsException("Cliente já cadastrado com este CPF.");
        }

        Customer updatedCustomer = customerPayload.toCustomer();
        updatedCustomer.setId(customerId);

        customerRepository.save(updatedCustomer);
    }
}
