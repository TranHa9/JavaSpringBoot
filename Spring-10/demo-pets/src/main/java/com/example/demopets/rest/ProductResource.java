package com.example.demopets.rest;


import com.example.demopets.model.request.ProductCreationRequest;
import com.example.demopets.model.request.ProductUpdateRequest;
import com.example.demopets.model.response.ProductResponse;
import com.example.demopets.service.ProductService;
import jakarta.persistence.Lob;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
@AllArgsConstructor
public class ProductResource {
    ProductService productService;

    @GetMapping
    public List<ProductResponse> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping
    public ProductResponse createProduct(@ModelAttribute @Valid ProductCreationRequest request,
                                         @RequestPart("image") MultipartFile imageFile) {
        return productService.createProduct(request, imageFile);
    }

    @GetMapping("/{id}")
    public ProductResponse getBookDetail(@PathVariable Long id) {
        return productService.getDetail(id);
    }

    @PutMapping("/{id}")
    public ProductResponse updateProduct(@PathVariable Long id, @Valid @ModelAttribute ProductUpdateRequest request,
                                         @RequestPart("image") MultipartFile imageFile) {
        return productService.updateProduct(id, request, imageFile);
    }
}
