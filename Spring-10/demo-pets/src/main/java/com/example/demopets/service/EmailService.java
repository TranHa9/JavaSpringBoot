package com.example.demopets.service;

import com.example.demopets.model.request.EmailRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
//@AllArgsConstructor
public class EmailService {

    JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    String from;

    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Async
    public void sendMail(EmailRequest request) {
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

        simpleMailMessage.setFrom(from);
        simpleMailMessage.setTo(request.getEmail());
        simpleMailMessage.setSubject("Đặt hàng thành công");
        simpleMailMessage.setText(request.getName());
        simpleMailMessage.setText(request.getPhone());

        javaMailSender.send(simpleMailMessage);
    }

}
