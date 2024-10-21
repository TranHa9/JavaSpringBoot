package com.example.demo.model.request;

import com.example.demo.constant.Gender;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.hibernate.validator.constraints.Length;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ReaderCreationRequest {

    @NotBlank(message = "Tên bạn đọc không được để trống!")
    @Length(max = 100, message = "Tên bạn đọc không vượt quá 100 ký tự")
    String name;

    @NotBlank(message = "Tên email không được để trống!")
    @Email(message = "Email phải đúng định dạng email")
    String email;

    @NotBlank(message = "Số điện thoại không được để trống!")
    @Pattern(regexp = "^0\\d{9}$", message = "Số điện thoại phải bắt đầu bằng số 0 và có đúng 10 chữ số")
    String phone;

    String birthday;

    @Enumerated(EnumType.STRING)
    Gender gender;
}
