package com.example.homeWork.service;

import com.example.homeWork.entity.Film;
import com.example.homeWork.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmService {

    @Autowired
    FilmRepository filmRepository;

    public List<Film> getAll() {
        return filmRepository.getAll();
    }
}
