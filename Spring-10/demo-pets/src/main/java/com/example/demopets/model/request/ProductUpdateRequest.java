package com.example.demopets.model.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.hibernate.validator.constraints.Length;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductUpdateRequest {
    @NotBlank(message = "Tên sản phẩm không được để trống!")
    @Length(max = 255, message = "Tên sản phẩm không vượt quá 255 ký tự")
    String name;

    @NotNull(message = "Giá sản phẩm không được để trống!")
    @Positive(message = "Giá sản phẩm phải là số dương!")
    double price;

    @Length(max = 1000, message = "Mô tả không vượt quá 1000 ký tự")
    String description;
}
