package com.example.homeWork.repository;

import com.example.homeWork.entity.Film;
import com.example.homeWork.model.request.FilmUpdateRequest;
import com.example.homeWork.util.file.FileUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class FilmRepository {
    final FileUtil<Film> fileUtil = new FileUtil<>();
    final String fileName = "db/films.json";

    public List<Film> getAll() {
        try {
            return fileUtil.readDataFromFile(fileName, Film[].class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public void save(Film film) {
        List<Film> films = getAll();
        int maxId = 0;
        for (int i = 0; i < films.size(); i++) {
            if (films.get(i).getId() > maxId) {
                maxId = films.get(i).getId();
            }
        }
        film.setId(maxId + 1);

        films.add(film);

        fileUtil.writeDataToFile(films, fileName);
    }

    public void delete(int id) {
        List<Film> films = getAll();
        films.removeIf(film -> film.getId() == id);
        fileUtil.writeDataToFile(films, fileName);
    }

    public FilmUpdateRequest findById(int id) {
        List<Film> films = getAll();
        for (Film film : films) {
            if (film.getId() == id) {
                System.out.println(film);
                return convertToFilmUpdateRequest(film);
            }
        }
        return null;
    }

    private FilmUpdateRequest convertToFilmUpdateRequest(Film film) {
        FilmUpdateRequest request = new FilmUpdateRequest();
        request.setId(film.getId());
        request.setName(film.getName());
        request.setDirector(film.getDirector());
        request.setDuration(film.getDuration());
        request.setGenre(film.getGenre());
        request.setPublishedDate(film.getPublishedDate());
        request.setGenre(film.getGenre());
        request.setCategory(film.getCategory());
        return request;
    }

    public void update(FilmUpdateRequest filmToUpdate) {
        List<Film> films = getAll();
        for (int i = 0; i < films.size(); i++) {
            if (films.get(i).getId() == filmToUpdate.getId()) {
                Film updatedFilm = new Film();
                updatedFilm.setId(filmToUpdate.getId());
                updatedFilm.setName(filmToUpdate.getName());
                updatedFilm.setDirector(filmToUpdate.getDirector());
                updatedFilm.setDuration(filmToUpdate.getDuration());
                updatedFilm.setGenre(filmToUpdate.getGenre());
                updatedFilm.setPublishedDate(filmToUpdate.getPublishedDate());
                updatedFilm.setDescription(filmToUpdate.getDescription());
                updatedFilm.setCategory(filmToUpdate.getCategory());
                films.set(i, updatedFilm);
                break;
            }
        }
        fileUtil.writeDataToFile(films, fileName);
    }
}
