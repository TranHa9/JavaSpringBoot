package org.example.springweb02.controller;

import jakarta.validation.Valid;
import org.example.springweb02.model.request.ReaderCreationRequest;
import org.example.springweb02.model.response.ReaderResponse;
import org.example.springweb02.service.ReaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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

    @GetMapping("/reader-creation-form")
    public String showCreationForm(Model model) {
        model.addAttribute("banDocCanTaoMoi", new ReaderCreationRequest());
        return "reader/reader-creation-form";
    }

    @PostMapping
    public String createReader(@ModelAttribute("banDocCanTaoMoi") @Valid ReaderCreationRequest request,
                               Errors errors, Model model) {
        if (errors != null && errors.hasErrors()) {
            model.addAttribute("banDocCanTaoMoi", request);
            return "reader/reader-creation-form";
        }
        readerService.createReader(request);
        return "redirect:/readers";
    }

//    @PostMapping
//    public String createReader(@ModelAttribute("banDocCanTaoMoi") @Valid ReaderCreationRequest request,
//                               BindingResult bindingResult, Model model) {
//        if (bindingResult != null && bindingResult.hasErrors()) {
//            model.addAttribute("banDocCanTaoMoi", request);
//            return "reader/reader-creation-form";
//        }
//        readerService.createReader(request);
//        return "redirect:/readers";
//    }

//    @GetMapping("{id}/delete")
//    public String deleteReder(@PathVariable("id") int id) {
//        readerService.deleteReader(id);
//        return "redirect:/readers";
//    }

}
