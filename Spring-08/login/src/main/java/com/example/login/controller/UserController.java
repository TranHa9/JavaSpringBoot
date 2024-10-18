package com.example.login.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserController {

    @GetMapping("/users")
    public String getUsers() {
        return "user/user";
    }
    @GetMapping("/register")
    public String showRegisterForm() {
        return "user/register";
    }

    @GetMapping("/login")
    public String showLoginForm() {
        return "user/login";
    }
}
