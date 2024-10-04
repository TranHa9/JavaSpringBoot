package com.example.homeWork.service;

import com.example.homeWork.entity.Film;
import com.example.homeWork.model.request.FilmCreationRequest;
import com.example.homeWork.model.request.FilmUpdateRequest;
import com.example.homeWork.model.response.FilmResponse;
import com.example.homeWork.repository.FilmRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmService {
    @Autowired
    FilmRepository filmRepository;
    @Autowired
    ObjectMapper objectMapper;

    public List<FilmResponse> getAll() {
        List<Film> films = filmRepository.getAll();
        return films.stream().map(film -> objectMapper.convertValue(film, FilmResponse.class)).toList();
    }

    public void save(FilmCreationRequest request) {
        Film film = new Film();
        film.setName(request.getName());
        film.setDirector(request.getDirector());
        film.setDuration(request.getDuration());
        film.setGenre(request.getGenre());
        film.setPublishedDate(request.getPublishedDate());
        film.setDescription(request.getDescription());
        film.setCategory(request.getCategory());

        filmRepository.save(film);
    }

    public void delete(int id) {
        filmRepository.delete(id);
    }

    public FilmResponse findById(int id) {
        Film film = filmRepository.findById(id);
        return objectMapper.convertValue(film, FilmResponse.class);
    }


    public void updateFilm(FilmUpdateRequest request) {
        Film filmEntity = objectMapper.convertValue(request, Film.class);
        filmRepository.update(filmEntity);
    }
}
