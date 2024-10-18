package com.example.login.service;

import com.example.login.Model.request.UserRequest;
import com.example.login.Model.response.UserResponse;
import com.example.login.entity.User;
import com.example.login.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
//@AllArgsConstructor
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    ObjectMapper objectMapper;

    JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String form;

    public UserService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    //Đăng ký tài khoản
    public UserResponse register(UserRequest request) {
        if (userRepository.findByEmail(request.getEmail()) != null) {
            throw new RuntimeException("Email đã tồn tại");
        }
        request.setEnabled(false); // Chưa kích hoạt
        request.setVerificationToken(UUID.randomUUID().toString()); // Tạo token xác thực
        System.out.println(request);

        User user = objectMapper.convertValue(request, User.class);
        user = userRepository.save(user);
        sendVerificationEmail(user);
        return objectMapper.convertValue(user, UserResponse.class);
    }

    @Async
    public void sendVerificationEmail(User user) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(form);
        message.setTo(user.getEmail());
        message.setSubject("Xác thực tài khoản");
        message.setText("Click vào link để xác thực tài khoản của bạn: " +
                "http://localhost:8080/api/v1/users/verify/" + user.getVerificationToken());
        javaMailSender.send(message);
    }

    //Xác nhận
    public boolean verifyUser(String token) {
        List<User> users = userRepository.getAll();
        for (User user : users) {
            // Kiểm tra token và trạng thái kích hoạt
            if (user.getVerificationToken().equals(token) && !user.isEnabled()) {
                    user.setEnabled(true);
                    userRepository.active(user); // Lưu lại trạng thái kích hoạt
                    return true; // Kích hoạt thành công
            }
        }
        return false; // Token không hợp lệ hoặc người dùng đã được kích hoạt
    }

    //Đăng nhập
    public UserResponse login(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) { // Nên mã hóa mật khẩu
            return objectMapper.convertValue(user, UserResponse.class);
        }
        throw new RuntimeException("Email hoặc mật khẩu không đúng!");
    }

    //Lấy danh sách user
    public List<UserResponse> getAll() {
        List<User> users = userRepository.getAll();
        return users
                .stream()
                .map(user -> objectMapper.convertValue(user, UserResponse.class))
                .toList();
    }
}
