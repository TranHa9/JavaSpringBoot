package org.example.springweb02.service;

import org.example.springweb02.entity.Book;
import org.example.springweb02.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;

    public List<Book> getAll() {
        // lay danh sach cac cuon sach
        return bookRepository.getAll();
    }

}
