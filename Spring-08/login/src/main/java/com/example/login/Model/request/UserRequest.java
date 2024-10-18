package com.example.login.Model.request;

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
public class UserRequest {

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
