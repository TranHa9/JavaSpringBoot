package org.example.springweb02.controller;

import org.example.springweb02.entity.Book;
import org.example.springweb02.model.request.BookCreationRequest;
import org.example.springweb02.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
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
        List<Book> books = bookService.getAll();
        model.addAttribute("danhSachCuonSach", books);
        return "books";
    }

    // Spring beans
    // là 1 object java nhung được quản lý bởi Spring IoC container
    // khong cần khởi tạo bean cũng có thể sử dug mà khng bị loi null

    @GetMapping("/book-creation-form")
    public String showBookCreationForm(Model model) {
        BookCreationRequest request = new BookCreationRequest();
        model.addAttribute("quyenSachMaToiMuonTaoMoi", request);
        return "book-creation";
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

}
