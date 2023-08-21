package com.uol.backend.controller;

import com.uol.backend.controller.payload.CustomerPayload;
import com.uol.backend.model.Customer;
import com.uol.backend.repository.CustomerRepository;
import com.uol.backend.service.CustomerService;
import com.uol.backend.service.exceptions.InvalidCustomerStatusException;
import com.uol.backend.service.exceptions.InvalidSocialSecurityNumberException;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private CustomerService customerService;

    @PostMapping
    public ResponseEntity createCustomer(@Valid @RequestBody CustomerPayload customerPayload) {
        try {
            customerService.createCostumer(customerPayload);

            return new ResponseEntity(HttpStatus.CREATED);

        } catch(EntityExistsException | InvalidCustomerStatusException | InvalidSocialSecurityNumberException e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity findAllCustomers() {
        try {
            List<Customer> customers = customerService.findAllCustomers();

            return ResponseEntity.status(HttpStatus.OK).body(customers);

        } catch (EntityNotFoundException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(e.getMessage());
        }
    }

    @GetMapping(value = "{id}")
    public ResponseEntity findCustomerById(@PathVariable Long id) {
        try {
            Customer customer = customerService.findCustomerById(id);

            return ResponseEntity.status(HttpStatus.OK).body(customer);

        } catch (EntityNotFoundException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(e.getMessage());
        }
    }

    @PutMapping(value = "{id}")
    public ResponseEntity updateCustomer(@Valid @RequestBody CustomerPayload customerPayload, @PathVariable Long id) {
        try {
            customerService.updateCustomer(customerPayload, id);

            return new ResponseEntity(HttpStatus.NO_CONTENT);

        } catch (EntityNotFoundException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(e.getMessage());
        } catch (EntityExistsException | InvalidCustomerStatusException | InvalidSocialSecurityNumberException e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(e.getMessage());
        }
    }
}
