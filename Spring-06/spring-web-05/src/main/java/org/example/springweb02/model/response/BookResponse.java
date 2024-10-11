package org.example.springweb02.model.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BookResponse {

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
