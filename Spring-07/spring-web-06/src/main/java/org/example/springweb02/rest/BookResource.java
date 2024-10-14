package org.example.springweb02.rest;

import lombok.AllArgsConstructor;
import org.example.springweb02.model.request.BookCreationRequest;
import org.example.springweb02.model.request.BookUpdateRequest;
import org.example.springweb02.model.response.BookResponse;
import org.example.springweb02.service.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/books")
public class BookResource {

    BookService bookService;

    @GetMapping
    public List<BookResponse> getBooks() {
        return bookService.getAll();
    }

//    @GetMapping
//    public ResponseEntity<List<BookResponse>> getBooks() {
//        List<BookResponse> bookServiceAll = bookService.getAll();
//        return ResponseEntity.ok(bookServiceAll);
//    }

    @GetMapping("/{id}")
    public BookResponse getBookDetail(@PathVariable Integer id) {
        return bookService.getDetail(id);
    }

    @PostMapping
    public BookResponse createBook(@RequestBody BookCreationRequest request) {
        return bookService.create(request);
    }

//    @PostMapping
//    public ResponseEntity<BookResponse> createBook(@RequestBody BookCreationRequest request) {
//        BookResponse bookResponse = bookService.create(request);
//        return ResponseEntity.created(null).body(bookResponse);
//    }


    @PutMapping("/{id}")
    public BookResponse updateBook(@PathVariable("id") Integer idBook
            , @RequestBody BookUpdateRequest request) {
        return bookService.update(idBook, request);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable("id") Integer idBook) {
        bookService.delete(idBook);
    }

}
