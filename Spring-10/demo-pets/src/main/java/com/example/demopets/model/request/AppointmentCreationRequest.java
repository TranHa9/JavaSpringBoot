package com.example.demopets.model.request;

import com.example.demopets.constant.Status;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.hibernate.validator.constraints.Length;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AppointmentCreationRequest {

    @NotBlank(message = "Tên người đặt không được để trống!")
    @Length(max = 255, message = "Tên người đặt không vượt quá 255 ký tự")
    String name;

    @NotBlank(message = "Số điện thoại không được để trống!")
    @Pattern(regexp = "^0\\d{9}$", message = "Số điện thoại phải bắt đầu bằng số 0 và có đúng 10 chữ số")
    String phone;

    @NotBlank(message = "Tên email không được để trống!")
    @Email(message = "Email phải đúng định dạng email")
    String email;

    @NotBlank(message = "Nội dung không được để trống!")
    @Length(max = 1000, message = "Nội dung đặt không vượt quá 1000 ký tự")
    String description;

    Status status;

//    @NotBlank(message = "Thời gian tạo không được để trống!")
//    LocalDateTime createdTime;
//
//    @NotBlank(message = "Thời gian duyệt tạo không được để trống!")
//    LocalDateTime reviewedTime;
}
