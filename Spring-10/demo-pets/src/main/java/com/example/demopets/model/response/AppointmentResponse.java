package com.example.demopets.model.response;

import com.example.demopets.constant.Status;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AppointmentResponse {

    Long id;
    String name;
    String phone;
    String email;
    String description;
    Status status;
    LocalDateTime createdTime;
    LocalDateTime reviewedTime;
}
