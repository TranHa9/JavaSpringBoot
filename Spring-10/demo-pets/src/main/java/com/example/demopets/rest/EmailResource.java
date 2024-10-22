package com.example.demopets.rest;

import com.example.demopets.model.request.EmailRequest;
import com.example.demopets.service.EmailService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/emails")
public class EmailResource {

    EmailService emailService;

    @PostMapping
    public void sendMail(@RequestBody @Valid EmailRequest request) {
        emailService.sendMail(request);
    }

}
