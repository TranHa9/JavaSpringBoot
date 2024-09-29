package com.example.homeWork.entity;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Film {
    int id;
    String name;
    String genre;
    String director;
    String duration;
    String description;
    LocalDate publishedDate;
    String category;
}
