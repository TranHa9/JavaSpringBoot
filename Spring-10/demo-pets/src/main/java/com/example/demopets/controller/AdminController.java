package com.example.demopets.controller;

import com.example.demopets.entity.Product;
import com.example.demopets.model.response.AppointmentResponse;
import com.example.demopets.model.response.ProductResponse;
import com.example.demopets.service.AppointmentService;
import com.example.demopets.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/admin")
@AllArgsConstructor
public class AdminController {

    ProductService productService;

    AppointmentService appointmentService;

    @GetMapping("/products")
    public String listProducts(Model model) {
        List<ProductResponse> products = productService.getAllProducts();
        model.addAttribute("products", products);
        return "admin/products";
    }

    @GetMapping("/appointments")
    public String listAppointments(Model model) {
        List<AppointmentResponse> appointments = appointmentService.getAllAppointments();
        model.addAttribute("appointments", appointments);
        return "admin/appointments";
    }

//    @PostMapping("/products")
//    public String saveProduct(@ModelAttribute Product product) {
//        productService.saveProduct(product);
//        return "redirect:/admin/products";
//    }
//
//    @PutMapping("/products/{id}")
//    public String updateProduct(@PathVariable Long id, @ModelAttribute Product product) {
//        productService.updateProduct(id, product);
//        return "redirect:/admin/products";
//    }
}
