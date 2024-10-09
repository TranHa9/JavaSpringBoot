package org.example.springweb02.controller;

import org.example.springweb02.model.request.BookCreationRequest;
import org.example.springweb02.model.request.BookUpdateRequest;
import org.example.springweb02.model.response.BookResponse;
import org.example.springweb02.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/books")
public class BookController {

    // injection
    @Autowired
    BookService bookService;

    @GetMapping
    public String getBooks(Model model) {
        List<BookResponse> books = bookService.getAll();
        model.addAttribute("danhSachCuonSach", books);
        return "book/books";
    }

    // Spring beans
    // là 1 object java nhung được quản lý bởi Spring IoC container
    // khong cần khởi tạo bean cũng có thể sử dug mà khng bị loi null

    @GetMapping("/book-creation-form")
    public String showBookCreationForm(Model model) {
        BookCreationRequest request = new BookCreationRequest();
        model.addAttribute("quyenSachMaToiMuonTaoMoi", request);
        return "book/book-creation";
    }

    @PostMapping
    public String createBook(@ModelAttribute(name = "quyenSachMaToiMuonTaoMoi") BookCreationRequest request) {
        bookService.save(request);
        return "redirect:/books";
    }

    @GetMapping("/{id}/delete")
    public String deleteBook(@PathVariable("id") int id) {
        bookService.delete(id);
        return "redirect:/books";
    }

    @GetMapping("/{id}/update-form")
    public String showUpdateForm(@PathVariable("id") int id, Model model) {
        BookResponse book = bookService.getById(id);
        model.addAttribute("motCuonSach", book);
        return "book/book-update";
    }

    @PostMapping("/update")
    public String updateBook(@ModelAttribute(name = "motCuonSach") BookUpdateRequest book) {
        bookService.update(book);
        return "redirect:/books";
    }

//    @GetMapping
//    public ResponseEntity<List<BookResponse>> getBooks() {
//        List<BookResponse> bookServiceAll = bookService.getAll();
//        return ResponseEntity.ok(bookServiceAll);
//    }

}
