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

    public void save(Book book) {
        List<Book> books = getAll();
        books.sort((b1, b2) -> b2.getId() - b1.getId());
        for (int i = 0; i < books.size(); i++) {

        }
        book.setId(books.get(0).getId() + 1);
        books.add(book);
        fileUtil.writeDataToFile(books, fileName);
    }
}
