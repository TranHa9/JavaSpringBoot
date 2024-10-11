package org.example.springweb02.controller;

import org.example.springweb02.model.request.ReaderCreationRequest;
import org.example.springweb02.model.response.ReaderResponse;
import org.example.springweb02.service.ReaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/readers")
public class ReaderController {

    @Autowired
    private ReaderService readerService;

    @GetMapping
    public String getAll(Model model) {
        List<ReaderResponse> readers = readerService.getAll();
        model.addAttribute("danhSachBanDoc", readers);

        ReaderCreationRequest request = new ReaderCreationRequest();
        model.addAttribute("banDocCanTaoMoi", request);
        return "reader/readers";
    }

    @PostMapping
    public String createReader(@ModelAttribute("banDocCanTaoMoi") ReaderCreationRequest request) {
        readerService.createReader(request);
        return "redirect:/readers";
    }

    @GetMapping("{id}/delete")
    public String deleteReder(@PathVariable("id") int id) {
        readerService.deleteReader(id);
        return "redirect:/readers";
    }

}
