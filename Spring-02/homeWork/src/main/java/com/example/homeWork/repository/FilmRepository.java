package com.example.homeWork.repository;

import com.example.homeWork.entity.Film;
import com.example.homeWork.util.file.FileUtil;
import org.springframework.stereotype.Repository;

import java.io.IOException;
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
}
