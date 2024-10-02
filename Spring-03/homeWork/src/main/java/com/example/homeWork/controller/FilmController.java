package com.example.homeWork.controller;

import com.example.homeWork.entity.Film;
import com.example.homeWork.model.request.FilmCreationRequest;
import com.example.homeWork.model.request.FilmUpdateRequest;
import com.example.homeWork.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/films")
public class FilmController {
    @Autowired
    FilmService filmService;

    @GetMapping
    public String getFlims(Model model) {
        List<Film> films = filmService.getAll();
        model.addAttribute("danhSachPhim", films);
        return "films";
    }

    @GetMapping("/film-creation-form")
    public String showCreateFormFilm(Model model) {
        FilmCreationRequest request = new FilmCreationRequest();
        model.addAttribute("filmCreate", request);
        return "film-creation";
    }

    @PostMapping
    public String createFilm(@ModelAttribute(name = "filmCreate") FilmCreationRequest request) {
        filmService.save(request);
        return "redirect:/films";
    }

    @GetMapping("/{id}/delete")
    public String deleteFilm(@PathVariable("id") int id) {
        filmService.delete(id);
        return "redirect:/films";
    }

    @GetMapping("/{id}/edit")
    public String updateFormFilm(@PathVariable("id") int id, Model model) {
        FilmUpdateRequest filmUpdateRequest = filmService.findById(id);
        System.out.println(filmUpdateRequest);
        model.addAttribute("filmUpdate", filmUpdateRequest);
        return "film-update";
    }

    @PostMapping("/update")
    public String updateFilm(@ModelAttribute(name = "filmUpdate") FilmUpdateRequest request) {
        filmService.updateFilm(request);
        return "redirect:/films";
    }
}

