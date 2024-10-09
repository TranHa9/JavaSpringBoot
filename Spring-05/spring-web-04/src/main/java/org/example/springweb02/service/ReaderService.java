package org.example.springweb02.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.example.springweb02.entity.Reader;
import org.example.springweb02.model.request.ReaderCreationRequest;
import org.example.springweb02.model.request.ReaderUpdateRequest;
import org.example.springweb02.model.response.ReaderResponse;
import org.example.springweb02.repository.ReaderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ReaderService {

    ReaderRepository readerRepository;

    ObjectMapper objectMapper;

    public List<ReaderResponse> getAll() {
        List<Reader> readers = readerRepository.getAll();

        return readers.stream()
                .map(reader -> objectMapper.convertValue(reader, ReaderResponse.class))
                .toList();
    }

    public void createReader(ReaderCreationRequest request) {
        Reader reader = objectMapper.convertValue(request, Reader.class);
        readerRepository.save(reader);
    }

    public ReaderResponse create(ReaderCreationRequest request) {
        Reader reader = objectMapper.convertValue(request, Reader.class);
        readerRepository.save(reader);
        return objectMapper.convertValue(reader, ReaderResponse.class);
    }


    public void deleteReader(int id) {
        readerRepository.delete(id);
    }

    public ReaderResponse getDetail(int id) {
        Reader reader = readerRepository.getDetail(id);
        return objectMapper.convertValue(reader, ReaderResponse.class);
    }

    public ReaderResponse update(int id, ReaderUpdateRequest request) {
        request.setId(id);
        readerRepository.update(request);
        return objectMapper.convertValue(request, ReaderResponse.class);
    }
}
