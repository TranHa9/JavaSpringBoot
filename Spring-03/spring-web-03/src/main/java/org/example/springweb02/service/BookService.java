package org.example.springweb02.service;

import org.example.springweb02.entity.Book;
import org.example.springweb02.model.request.BookCreationRequest;
import org.example.springweb02.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
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
        // convert tu request sang entity
        Book book = new Book();
        book.setName(request.getTenSach());
        book.setAuthor(request.getTacGia());
        book.setPublishedYear(request.getPublishedYear());
        book.setPublisher(request.getPublisher());
        book.setTotalPage(request.getTotalPage());
        book.setCategory(request.getCategory());
        book.setDescription(request.getDescription());
        book.setPrice(request.getPrice());

        bookRepository.save(book);
    }

    public void delete(int id) {
        bookRepository.delete(id);
    }
}
