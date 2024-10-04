package com.example.homeWork.controller;

import com.example.homeWork.model.request.CustomerCreationRequest;
import com.example.homeWork.model.response.CustomerResponse;
import com.example.homeWork.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @GetMapping
    public String getCustomer(Model model) {
        List<CustomerResponse> customerResponses = customerService.getAll();
        model.addAttribute("danhSachKhachHang", customerResponses);

        CustomerCreationRequest customerCreationRequest = new CustomerCreationRequest();
        model.addAttribute("khachHangMoi", customerCreationRequest);
        return "customer/customers";
    }

    @PostMapping
    public String createCustomer(@ModelAttribute("khachHangMoi") CustomerCreationRequest request) {
        customerService.createCustomer(request);
        return "redirect:/customers";
    }

    @GetMapping("{id}/delete")
    public String deleteCustomer(@PathVariable("id") int id) {
        customerService.deleteCustomer(id);
        return "redirect:/customers";
    }
}
