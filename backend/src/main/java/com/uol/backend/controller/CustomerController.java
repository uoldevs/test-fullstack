package com.uol.backend.controller;

import com.uol.backend.controller.payload.CustomerPayload;
import com.uol.backend.model.Customer;
import com.uol.backend.repository.CustomerRepository;
import com.uol.backend.service.CustomerService;
import com.uol.backend.service.exceptions.CustomerAlreadyExistsException;
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

        } catch(CustomerAlreadyExistsException e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(e.getMessage());
        }
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Customer> findAllCustomers() {
        return customerRepository.findAll();
    }

    @GetMapping(value = "{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Customer> findCustomerById(@PathVariable Long id) {
        return customerRepository.findById(id);
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<HttpStatus> updateCustomer(@Valid @RequestBody CustomerPayload customer, @PathVariable Long id) {
        Optional<Customer> c = customerRepository.findById(id);

        if (c.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        var cus = c.get();
        cus.setFullName(customer.getFullName());

        customerRepository.save(cus);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
