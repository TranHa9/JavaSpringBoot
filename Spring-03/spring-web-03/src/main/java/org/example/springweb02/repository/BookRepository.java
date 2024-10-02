package org.example.springweb02.repository;

import org.example.springweb02.entity.Book;
import org.example.springweb02.util.file.FileUtil;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.util.ArrayList;
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

        // gan id cho book
        // tim id lon nhat => tang them 1 don vi
        int maxId = 0;
        for (int i = 0; i < books.size(); i++) {
            if (books.get(i).getId() > maxId) {
                maxId = books.get(i).getId();
            }
        }
        book.setId(maxId + 1);

        // add book vao danh sach
        books.add(book);

        // ghi vao file
        fileUtil.writeDataToFile(books, fileName);
    }

    public void delete(int id) {
        List<Book> books = getAll();

        // xoa tuc la chi lay cac cuon sach co id khong phai la id can xoa
//        List<Book> ketQua = new ArrayList<>();
//        for (int i = 0; i < books.size(); i++) {
//            if(books.get(i).getId() != id) {
//                ketQua.add(books.get(i));
//            }
//        }

        // java 8
        books.removeIf(book -> book.getId() == id);

        // ghi vao file
        fileUtil.writeDataToFile(books, fileName);
    }
}
