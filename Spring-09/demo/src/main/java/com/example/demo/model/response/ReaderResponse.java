package com.example.demo.model.response;

import com.example.demo.constant.Gender;
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
public class ReaderResponse {

    Long id;

    String name;

    Gender gender;

    LocalDate birthday;

    String phone;

    String email;
}
