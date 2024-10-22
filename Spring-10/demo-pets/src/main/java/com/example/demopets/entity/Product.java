package com.example.demopets.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.apache.tomcat.util.codec.binary.Base64;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String name;

    double price;

    @Column(length = 1000)
    String description;

    @Lob
    byte[] image;

    public String getImageBase64() {
        if (image != null) {
            return Base64.encodeBase64String(this.image);
        }
        return null; // Trả về null nếu image là null
    }

}
