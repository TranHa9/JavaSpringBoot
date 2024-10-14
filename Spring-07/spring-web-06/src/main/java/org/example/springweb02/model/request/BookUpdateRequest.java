package org.example.springweb02.model.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BookUpdateRequest {

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
