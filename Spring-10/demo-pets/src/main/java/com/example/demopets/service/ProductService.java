package com.example.demopets.service;

import com.example.demopets.entity.Product;
import com.example.demopets.exception.ObjectNotFoundException;
import com.example.demopets.model.request.ProductCreationRequest;
import com.example.demopets.model.request.ProductUpdateRequest;
import com.example.demopets.model.response.ProductResponse;
import com.example.demopets.repository.ProductRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
@AllArgsConstructor
public class ProductService {

    ProductRepository productRepository;
    ObjectMapper objectMapper;

    public List<ProductResponse> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream().map(product -> objectMapper.convertValue(product, ProductResponse.class)).toList();
    }

    public ProductResponse createProduct(ProductCreationRequest request, MultipartFile imageFile) {
        if (imageFile.getSize() > 5 * 1024 * 1024) { // 5MB
            throw new IllegalArgumentException("Kích thước file ảnh không được vượt quá 5MB!");
        }
        String contentType = imageFile.getContentType();
        if (!"image/jpeg".equals(contentType) && !"image/png".equals(contentType)) {
            throw new IllegalArgumentException("File ảnh phải có định dạng jpg, jpeg hoặc png!");
        }
        try {
            byte[] imageBytes = imageFile.getBytes();

            Product product = objectMapper.convertValue(request, Product.class);
            product.setImage(imageBytes);

            Product savedProduct = productRepository.save(product);
            return objectMapper.convertValue(savedProduct, ProductResponse.class);
        } catch (IOException e) {
            throw new RuntimeException("Lỗi khi tải file ảnh lên: " + e.getMessage());
        }
    }

    public ProductResponse getDetail(Long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new ObjectNotFoundException("Không tìm thấy sản phẩm với" + id));
        return objectMapper.convertValue(product, ProductResponse.class);
    }

    public ProductResponse updateProduct(Long id, ProductUpdateRequest request, MultipartFile imageFile) {
        if (imageFile.getSize() > 5 * 1024 * 1024) { // 5MB
            throw new IllegalArgumentException("Kích thước file ảnh không được vượt quá 5MB!");
        }
        String contentType = imageFile.getContentType();
        if (!"image/jpeg".equals(contentType) && !"image/png".equals(contentType)) {
            throw new IllegalArgumentException("File ảnh phải có định dạng jpg, jpeg hoặc png!");
        }
        try {
            byte[] imageBytes = imageFile.getBytes();

            Product product = objectMapper.convertValue(request, Product.class);
            product.setImage(imageBytes);
            product.setId(id);
            Product savedProduct = productRepository.save(product);
            return objectMapper.convertValue(savedProduct, ProductResponse.class);
        } catch (IOException e) {
            throw new RuntimeException("Lỗi khi tải file ảnh lên: " + e.getMessage());
        }
    }


}
