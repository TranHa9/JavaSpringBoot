package com.example.demo.controller;

import com.example.demo.model.response.ReaderResponse;
import com.example.demo.service.ReaderService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/readers")
@AllArgsConstructor
public class ReaderController {

    ReaderService readerService;

    @GetMapping
    public String getReaders(Model model) {
        List<ReaderResponse> readers = readerService.getAllReaders();
        model.addAttribute("readers",readers);
        return "reader";
    }
}
