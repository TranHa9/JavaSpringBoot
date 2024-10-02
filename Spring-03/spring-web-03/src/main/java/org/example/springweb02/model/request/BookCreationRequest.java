package org.example.springweb02.model.request;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BookCreationRequest {

    String tenSach;
    String tacGia;
    int publishedYear;
    String publisher;
    int totalPage;
    String category;
    String description;
    int price;


}
