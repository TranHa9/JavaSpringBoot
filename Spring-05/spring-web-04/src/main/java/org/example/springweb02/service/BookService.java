package org.example.springweb02.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.springweb02.entity.Book;
import org.example.springweb02.model.request.BookCreationRequest;
import org.example.springweb02.model.request.BookUpdateRequest;
import org.example.springweb02.model.response.BookResponse;
import org.example.springweb02.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    ObjectMapper objectMapper;

    public List<BookResponse> getAll() {
        // lay danh sach cac cuon sach
        List<Book> books = bookRepository.getAll();

        // convert dữ liệu từ list book sang list result

        // cách 1 - bằng cơm
//        List<BookResponse> result = new ArrayList<>();
//        for (int i = 0; i < books.size(); i++) {
//            Book book = books.get(i);
//            BookResponse bookResponse = new BookResponse();
//            bookResponse.setId(book.getId());
//            bookResponse.setName(book.getName());
//            bookResponse.setAuthor(book.getAuthor());
//            bookResponse.setPublishedYear(book.getPublishedYear());
//            bookResponse.setPublisher(book.getPublisher());
//            bookResponse.setTotalPage(book.getTotalPage());
//            bookResponse.setCategory(book.getCategory());
//            bookResponse.setDescription(book.getDescription());
//            bookResponse.setPrice(book.getPrice());
//
//            result.add(bookResponse);
//        }

        // cách 2 - dùng builder
//        List<BookResponse> result = new ArrayList<>();
//        for (Book book : books) {
//            BookResponse bookResponse = BookResponse.builder()
//                    .id(book.getId())
//                    .name(book.getName())
//                    .author(book.getAuthor())
//                    .publishedYear(book.getPublishedYear())
//                    .publisher(book.getPublisher())
//                    .totalPage(book.getTotalPage())
//                    .category(book.getCategory())
//                    .description(book.getDescription())
//                    .price(book.getPrice())
//                    .build();
//            result.add(bookResponse);
//        }

        // cách 3 - dùng object mapper
//        List<BookResponse> result = new ArrayList<>();
//        for (Book book : books) {
//            BookResponse bookResponse = objectMapper.convertValue(book, BookResponse.class);
//            result.add(bookResponse);
//        }

        // cách 4 - dùng stream (java 8)
        return books
                .stream()
                .map(book -> objectMapper.convertValue(book, BookResponse.class))
                .toList();

//        return result;
    }

    public void save(BookCreationRequest request) {
        // convert tu request sang entity
//        Book book = new Book();
//        book.setName(request.getTenSach());
//        book.setAuthor(request.getTacGia());
//        book.setPublishedYear(request.getPublishedYear());
//        book.setPublisher(request.getPublisher());
//        book.setTotalPage(request.getTotalPage());
//        book.setCategory(request.getCategory());
//        book.setDescription(request.getDescription());
//        book.setPrice(request.getPrice());

        Book book = objectMapper.convertValue(request, Book.class);

        bookRepository.save(book);
    }

    public void delete(int id) {
        bookRepository.delete(id);
    }

    public BookResponse getById(int id) {
        Book book = bookRepository.getById(id);
        return objectMapper.convertValue(book, BookResponse.class);
    }

    public void update(BookUpdateRequest request) {
        bookRepository.update(request);
    }

    public BookResponse update(Integer id, BookUpdateRequest request) {
        request.setId(id);
        bookRepository.update(request);
        return objectMapper.convertValue(request, BookResponse.class);
    }

    public BookResponse create(BookCreationRequest request) {
        Book entity = objectMapper.convertValue(request, Book.class);
        entity.setName(request.getTenSach());
        entity.setAuthor(request.getTacGia());
        bookRepository.save(entity);

        return objectMapper.convertValue(entity, BookResponse.class);
    }

    public BookResponse getDetail(Integer id) {
        Book book = bookRepository.getDetail(id);
        return objectMapper.convertValue(book, BookResponse.class);
    }
}
