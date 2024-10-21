package com.example.demo.rest;

import com.example.demo.model.request.ReaderCreationRequest;
import com.example.demo.model.request.ReaderUpdateRequest;
import com.example.demo.model.response.ReaderResponse;
import com.example.demo.service.ReaderService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/readers")
public class ReaderResource {

    ReaderService readerService;

    @GetMapping
    public List<ReaderResponse> getAll() {
        return readerService.getAllReaders();
    }

    @PostMapping
    public ReaderResponse createReader(@RequestBody @Valid ReaderCreationRequest request) {
        return readerService.create(request);
    }

    @GetMapping("/{id}")
    public ReaderResponse getDetail(@PathVariable Long id) {
        return readerService.getDetail(id);
    }

    @PutMapping("/{id}")
    public ReaderResponse updateReader(@PathVariable Long id, @Valid @RequestBody ReaderUpdateRequest request) {
        return readerService.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteReader(@PathVariable Long id) {
        readerService.deleteReader(id);
    }
}
