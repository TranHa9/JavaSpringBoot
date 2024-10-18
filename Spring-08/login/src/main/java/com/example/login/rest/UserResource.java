package com.example.login.rest;


import com.example.login.Model.request.UserRequest;
import com.example.login.Model.response.UserResponse;
import com.example.login.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/users")
public class UserResource {

    UserService userService;

    @PostMapping("/register")
    public UserResponse registerUser(@RequestBody UserRequest request){
        return userService.register(request);
    }

    @GetMapping("/verify/{token}")
    public String verifyUser(@PathVariable String token) {
        StringBuilder response = new StringBuilder();

        if (userService.verifyUser(token)) {
            response.append("<h2>Kích hoạt tài khoản thành công! Bạn có thể đăng nhập.</h2>");
            response.append("<a href='/login'><button>Đăng nhập</button></a>");
        } else {
            response.append("<h2>Kích hoạt tài khoản thất bại hoặc link đã hết hạn.</h2>");
            response.append("<a href='/register'><button>Trở về trang đăng ký</button></a>");
        }

        return response.toString();
    }

    @PostMapping("/login")
    public UserResponse login(@RequestBody UserRequest request) {
        return userService.login(request.getEmail(), request.getPassword());
    }

    @GetMapping("/list")
    public List<UserResponse> listUsers() {
        return userService.getAll();
    }

}
