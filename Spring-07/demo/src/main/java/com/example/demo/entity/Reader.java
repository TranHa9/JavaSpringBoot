package com.example.demo.entity;

import com.example.demo.constant.Gender;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "readers")
public class Reader {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(nullable = false, length = 100)
    String name;

    @Enumerated(EnumType.STRING)
    Gender gender;

    LocalDate birthday;

    @Column(nullable = false, length = 20)
    String phone;

    @Column(nullable = false, length = 100)
    String email;
}
