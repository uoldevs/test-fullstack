package com.uol.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String socialSecurityNumber;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private String status;
}
