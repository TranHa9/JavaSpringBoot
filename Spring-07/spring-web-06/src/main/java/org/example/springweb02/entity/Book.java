package org.example.springweb02.entity;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Book {

    // POJO - Plain old java object
    // class chỉ có thuộc tính và get/set, constructor

    int id;
    String name;
    String author;
    int publishedYear;
    String publisher;
    int totalPage;
    String category;
    String description;
    int price;

}
