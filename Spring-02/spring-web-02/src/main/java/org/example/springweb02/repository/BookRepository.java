package org.example.springweb02.repository;

import org.example.springweb02.entity.Book;
import org.example.springweb02.util.file.FileUtil;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.util.List;

@Repository
public class BookRepository {

    final FileUtil<Book> fileUtil = new FileUtil<>();
    final String fileName = "db/books.json";

    public List<Book> getAll() {
        // lay du lieu tu DB, cloud, ....
        // fake du lieu
        try {
            return fileUtil.readDataFromFile(fileName, Book[].class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

}
