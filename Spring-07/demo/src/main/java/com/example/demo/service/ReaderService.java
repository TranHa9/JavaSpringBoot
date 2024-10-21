package com.example.demo.service;

import com.example.demo.entity.Reader;
import com.example.demo.model.request.ReaderCreationRequest;
import com.example.demo.model.request.ReaderUpdateRequest;
import com.example.demo.model.response.ReaderResponse;
import com.example.demo.repository.ReaderRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ReaderService {

    ReaderRepository readerRepository;
    ObjectMapper objectMapper;

    public List<ReaderResponse> getAllReaders() {
        List<Reader> readers = readerRepository.findAll();
        return readers.stream().map(reader -> objectMapper.convertValue(reader, ReaderResponse.class)).toList();
    }

    public ReaderResponse create(@Valid ReaderCreationRequest request) {
        Reader reader = objectMapper.convertValue(request, Reader.class);
        reader = readerRepository.save(reader);
        return objectMapper.convertValue(reader, ReaderResponse.class);
    }

    public ReaderResponse update(Long id, @Valid ReaderUpdateRequest request) {
        Reader reader = readerRepository.findById(id).orElse(null);
        if (reader == null) {
            return null;
        }
        reader = objectMapper.convertValue(request, Reader.class);
        reader.setId(id);
        reader = readerRepository.save(reader);
        return objectMapper.convertValue(reader, ReaderResponse.class);
    }

    public ReaderResponse getDetail(Long id) {
        Reader reader = readerRepository.findById(id).orElseThrow();
        return objectMapper.convertValue(reader, ReaderResponse.class);
    }

    public void deleteReader(Long id) {
        readerRepository.deleteById(id);
    }
}
