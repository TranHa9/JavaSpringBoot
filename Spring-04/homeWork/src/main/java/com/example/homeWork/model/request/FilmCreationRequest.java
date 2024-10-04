package com.example.homeWork.model.request;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FilmCreationRequest {

    String name;
    String genre;
    String director;
    String duration;
    String description;
    LocalDate publishedDate;
    String category;
}
