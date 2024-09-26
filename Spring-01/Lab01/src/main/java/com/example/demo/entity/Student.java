package com.example.demo.entity;


import lombok.*;
import lombok.experimental.FieldDefaults;

//@Getter
//@Setter
//@ToString
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Student {
    int id;
    String name;
    String address;
    float gpa;
}
