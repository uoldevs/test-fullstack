package com.uol.backend.service;

import com.uol.backend.controller.payload.CustomerPayload;
import com.uol.backend.model.Customer;
import com.uol.backend.model.Status;
import com.uol.backend.repository.CustomerRepository;
import com.uol.backend.service.exceptions.InvalidCustomerStatusException;
import com.uol.backend.service.exceptions.InvalidSocialSecurityNumberException;
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

    @Autowired
    private SocialSecurityNumberValidationService socialSecurityNumberValidationService;

    @Autowired StatusValidationService statusValidationService;

    public void createCostumer(CustomerPayload customerPayload) throws EntityExistsException, InvalidCustomerStatusException, InvalidSocialSecurityNumberException{
        Optional<Customer> customer = customerRepository
                .findBySocialSecurityNumber(customerPayload.getSocialSecurityNumber());

        if(customer.isPresent()) {
            throw new EntityExistsException("Cliente já cadastrado com este CPF.");
        }

        Optional<Boolean> isValidSocialSecurityNumber = socialSecurityNumberValidationService.isValid(
                        customerPayload.getSocialSecurityNumber()
                );

        if(isValidSocialSecurityNumber.isEmpty()) {
            throw new InvalidSocialSecurityNumberException("Numero de CPF inválido");
        }

        Optional isValidStatus = statusValidationService.isValidStatus(
                customerPayload.getStatus(), Status.class
        );

        if(isValidStatus.isEmpty()) {
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

    public void updateCustomer(CustomerPayload customerPayload, Long customerId) throws EntityNotFoundException, EntityExistsException, InvalidCustomerStatusException, InvalidSocialSecurityNumberException {
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

        Optional<Boolean> isValidSocialSecurityNumber = socialSecurityNumberValidationService.isValid(
                        customerPayload.getSocialSecurityNumber()
                );

        if(isValidSocialSecurityNumber.isEmpty()) {
            throw new InvalidSocialSecurityNumberException("Numero de CPF inválido");
        }

        Optional isValidStatus = statusValidationService.isValidStatus(
                customerPayload.getStatus(), Status.class
        );

        if(isValidStatus.isEmpty()) {
            throw new InvalidCustomerStatusException("Status não suportado.");
        }

        Customer updatedCustomer = customerPayload.toCustomer();
        updatedCustomer.setId(customerId);

        customerRepository.save(updatedCustomer);
    }
}
