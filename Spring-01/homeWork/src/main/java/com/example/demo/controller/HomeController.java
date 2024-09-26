package com.example.demo.controller;

import com.example.demo.entity.Product;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HomeController {
    @GetMapping
    public String getProductList(Model model){
        List<Product> products = productList();
        model.addAttribute("danhSachSanPham", products);
        return "product";
    }

    private List<Product> productList(){
        List<Product> products = new ArrayList<>();
        for (int i = 6; i < 10; i++) {
            Product product = new Product();
            product.setId(String.valueOf(i));
            product.setName("Oppo Reno " + i);
            product.setDescription("The latest Oppo " + i);
            product.setPrice(222 + i);
            product.setBrand("oppo");
            products.add(product);
        }
        for (int i = 10; i < 15; i++) {
            Product product = new Product();
            product.setId(String.valueOf(i));
            product.setName("iPhone " + i);
            product.setDescription("The latest iPhone " + i);
            product.setPrice(555 + i);
            product.setBrand("Apple");
            products.add(product);
        }
        for (int i = 20; i < 25; i++) {
            Product product = new Product();
            product.setId(String.valueOf(i));
            product.setName("SamSung S" + i);
            product.setDescription("The latest SamSung " + i);
            product.setPrice(444 + i);
            product.setBrand("SamSung");
            products.add(product);
        }
        return products;
    }
}
