package org.example.springweb02.rest;

import jakarta.validation.Valid;
import org.example.springweb02.model.request.ReaderCreationRequest;
import org.example.springweb02.model.request.ReaderUpdateRequest;
import org.example.springweb02.model.response.ReaderResponse;
import org.example.springweb02.service.ReaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/readers")
public class ReaderResource {
    @Autowired
    ReaderService readerService;

    @GetMapping
    public List<ReaderResponse> getAll() {
        return readerService.getAll();
    }

    @PostMapping
    public ReaderResponse createReader(@RequestBody @Valid ReaderCreationRequest request) {
        return readerService.create(request);
    }

    @GetMapping("/{id}")
    public ReaderResponse getDetail(@PathVariable int id) {
        return readerService.getDetail(id);
    }

    @PutMapping("/{id}")
    public ReaderResponse updateReader(@PathVariable int id, @Valid @RequestBody ReaderUpdateRequest request) {
        return readerService.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteReader(@PathVariable int id) {
        readerService.deleteReader(id);
    }
}
