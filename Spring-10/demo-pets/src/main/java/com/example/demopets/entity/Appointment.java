package com.example.demopets.entity;

import com.example.demopets.constant.Status;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "appointment")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String name;

    @Column(length = 20)
    String phone;

    String email;

    @Column(length = 1000)
    String description;

    @Enumerated(EnumType.STRING)
    Status status;

    LocalDateTime createdTime;

    LocalDateTime reviewedTime;
}
