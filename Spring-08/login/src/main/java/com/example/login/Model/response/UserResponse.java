package com.example.login.Model.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserResponse {

    int id;
    String name;
    String email;
    String password;
    String phone;
    String address;
    LocalDate dob;
    String gender;
    boolean enabled;
    String verificationToken;
}
