package com.example.homeWork.repository;

import com.example.homeWork.entity.Film;
import com.example.homeWork.util.file.FileUtil;
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

    public Film findById(int id) {
        List<Film> films = getAll();
        for (Film film : films) {
            if (film.getId() == id) {
                return film;
            }
        }
        return null;
    }

    public void update(Film filmToUpdate) {
        List<Film> films = getAll();
        for (int i = 0; i < films.size(); i++) {
            if (films.get(i).getId() == filmToUpdate.getId()) {
                films.set(i, filmToUpdate);
                break;
            }
        }
        fileUtil.writeDataToFile(films, fileName);
    }
}
