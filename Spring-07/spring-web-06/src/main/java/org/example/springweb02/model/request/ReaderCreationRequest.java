package org.example.springweb02.model.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import org.hibernate.validator.constraints.Length;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ReaderCreationRequest {

    @NotBlank(message = "Tên bạn đọc không được để trống!")
    @Length(max = 100, message = "Tên bạn đọc không vượt quá 100 ký tự")
    String name;

    @NotBlank(message = "Tên bạn đọc không được để trống!")
    @Email(message = "Email phải đúng định dạng email")
    String email;

    @NotBlank(message = "Tên bạn đọc không được để trống!")
    @Pattern(regexp = "^0\\d{9}$", message = "Số điện thoại phải bắt đầu bằng số 0 và có đúng 10 chữ số")
    String phone;

    @NotBlank(message = "Tên bạn đọc không được để trống!")
    @Length(max = 200, message = "Địa chỉ không quá 200 ký tự")
    String address;

}
