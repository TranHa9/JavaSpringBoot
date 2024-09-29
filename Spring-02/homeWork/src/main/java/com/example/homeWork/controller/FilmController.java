package com.example.homeWork.controller;

import com.example.homeWork.entity.Film;
import com.example.homeWork.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/films")
public class FilmController {
    @Autowired
    FilmService filmService;

    @GetMapping
    public String getFilms(Model model) {
        List<Film> films = filmService.getAll();
        model.addAttribute("danhSachPhim", films);
        return "films";
    }
}
