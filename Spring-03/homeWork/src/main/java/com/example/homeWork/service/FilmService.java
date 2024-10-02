package com.example.homeWork.service;

import com.example.homeWork.entity.Film;
import com.example.homeWork.model.request.FilmCreationRequest;
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

    public Film findById(int id) {
        return filmRepository.findById(id);
    }

    public void updateFilm(Film film) {
        Film filmToUpdate = filmRepository.findById(film.getId());

        filmToUpdate.setName(film.getName());
        filmToUpdate.setDirector(film.getDirector());
        filmToUpdate.setDuration(film.getDuration());
        filmToUpdate.setGenre(film.getGenre());
        filmToUpdate.setPublishedDate(film.getPublishedDate());
        filmToUpdate.setDescription(film.getDescription());
        filmToUpdate.setCategory(film.getCategory());

        filmRepository.update(filmToUpdate);
    }
}
