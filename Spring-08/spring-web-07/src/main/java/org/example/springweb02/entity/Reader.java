package org.example.springweb02.entity;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Reader {

    int id;
    String name;
    String email;
    String phone;
    String address;

}
