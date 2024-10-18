package com.example.login.entity;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.hibernate.validator.constraints.Length;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User {

    int id;

    @NotBlank(message = "Tên không được để trống!")
    String name;

    @NotBlank(message = "email không được để trống!")
    @Email(message = "Phải đúng định dạng email")
    String email;

    @NotBlank(message = "Mật khẩu không được để trống!")
    @Length(min = 8, message = "Mật khẩu phải ít nhất 8 ký tự")
    String password;

    @Pattern(regexp = "^0\\d{9}$",message = "Số điện thoại phải là 10 ký tự số và bắt đầu bằng số 0")
    String phone;

    @Length(max = 250, message = "Địa chỉ không vượt quá 250 ký tự")
    String address;

    @NotBlank(message = "Ngày sinh không được để trống!")
    @Past(message = "Ngày sinh phải là ngày trong quá khứ")
    LocalDate dob;

    @NotBlank(message = "Giới tính không được để trống!")
    @Pattern(regexp = "Nam|Nữ|Khác", message = "Giới tính phải là: Nam, Nữ, hoặc Khác")
    String gender;

    boolean enabled;
    String verificationToken;

}
