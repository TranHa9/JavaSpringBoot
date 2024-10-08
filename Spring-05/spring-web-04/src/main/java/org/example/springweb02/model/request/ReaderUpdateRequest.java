package org.example.springweb02.model.request;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ReaderUpdateRequest {
    int id;
    String name;
    String email;
    String phone;
    String address;
}
