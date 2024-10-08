package org.example.springweb02.service;

import org.example.springweb02.entity.Book;
import org.example.springweb02.model.request.BookCreationRequest;
import org.example.springweb02.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;

    public List<Book> getAll() {
        // lay danh sach cac cuon sach
        return bookRepository.getAll();
    }

    public void save(BookCreationRequest request) {
        Book book = new Book();
        book.setName(request.getName());
        book.setAuthor(request.getAuthor());
        book.setPublishedYear(request.getPublishedYear());
        book.setPublisher(request.getPublisher());
        book.setTotalPage(request.getTotalPage());
        book.setCategory(request.getCategory());
        book.setDescription(request.getDescription());
        book.setPrice(request.getPrice());

        bookRepository.save(book);
    }

    public void delete(int id) {
        List<Book> books = getAll();
        List<Book> ketQua = new ArrayList<>();
        for (int i = 0; i < books.size(); i++) {
            if (books.get(i).getId() != id) {
                //ketQua.add(books);
            }
        }
    }
}
