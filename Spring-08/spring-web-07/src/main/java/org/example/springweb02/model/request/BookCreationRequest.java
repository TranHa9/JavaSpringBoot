package org.example.springweb02.model.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import org.hibernate.validator.constraints.Length;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BookCreationRequest {

    @NotBlank(message = "Tên sách không được để trống")
    @Length(max = 100, message = "Tên sách không được quá 100 ký tự")
    String name;

    @NotBlank(message = "Tên tác giả không được để trống")
    @Length(max = 100, message = "Tên tac gia không được quá 100 ký tự")
    String author;

    @Min(value = 2000, message = "Năm xuất bản phải lớn hơn 2000")
    int publishedYear;

    @NotBlank(message = "Nhà xuất bản không được để trống")
    String publisher;

    @Min(value = 1, message = "Số trang phải lớn hơn 0")
    int totalPage;

    @NotBlank(message = "Thể loại không được để trống")
    String category;

    @Length(max = 200, message = "Mô tả sách không được quá 200 ký tự")
    String description;

    @Min(value = 1000, message = "Giá sách phải lớn hơn 1000")
    int price;


}
