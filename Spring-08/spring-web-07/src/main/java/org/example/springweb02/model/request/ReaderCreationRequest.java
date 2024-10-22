package org.example.springweb02.model.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import org.hibernate.validator.constraints.Length;

import java.time.LocalDate;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
@Schema(description = "Thông tin tạo mới bạn đọc")
public class ReaderCreationRequest {

    @Schema(
            description = "Tên bạn đọc",
            name = "name",
            type = "string",
            example = "Nguyễn Văn A")
    @NotBlank(message = "Tên bạn đọc bắt buộc nhập")
    @Length(max = 100, message = "Tên bạn đọc không quá 100 ký tự")
    String name;

    @Schema(
            description = "Email bạn đọc",
            name = "email",
            type = "string",
            example = "abc@gmail.com")
    @NotBlank(message = "Email của bạn đọc bắt buộc nhập")
    @Email(message = "Email không đúng định dạng")
    String email;

    @Schema(
            description = "SDT bạn đọc",
            name = "phone",
            type = "string",
            example = "0987654321")
    @NotBlank(message = "Số điện thoại của bạn đọc bắt buộc nhập")
    @Pattern(regexp = "0[0-9]{9}", message = "Số điện thoại không đúng định dạng")
    String phone;

    @Schema(
            description = "Địa chỉ bạn đọc",
            name = "address",
            type = "string",
            example = "Hà Nội")
    @NotNull
    @Length(max = 200, message = "Địa chỉ không quá 200 ký tự")
    String address;

//    @Min(value = 1, message = "Tuổi phải lớn hơn hoặc bằng 1")
//    @Max(value = 100, message = )
//    @Range(min = 1, max = 100, message = "Tuổi phải nằm trong khoảng từ 1 đến 100")
//    Double demo;

    @Schema(
            description = "Ngày sinh bạn đọc",
            name = "dob",
            type = "date",
            pattern = "yyyy-MM-dd",
            example = "1995-10-27")
    @NotNull
//    @Past(message = "Ngày sinh phải nhỏ hơn ngày hiện tại")
//    @Future(message = "Ngày sinh phải lớn hơn ngày hiện tại")
    LocalDate dob;

}
