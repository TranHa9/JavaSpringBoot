package com.example.demopets.model.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.apache.tomcat.util.codec.binary.Base64;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductResponse {

    Long id;

    String name;

    double price;

    String description;

    byte[] image;
    
    public String getImageBase64() {
        if (image != null) {
            return Base64.encodeBase64String(this.image);
        }
        return null; // Trả về null nếu image là null
    }

}
