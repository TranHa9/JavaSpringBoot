package org.example.springweb02.rest;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.example.springweb02.model.request.ReaderCreationRequest;
import org.example.springweb02.model.response.ReaderResponse;
import org.example.springweb02.service.ReaderService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/readers")
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ReaderResource {

    //    @Autowired
    ReaderService readerService;

    @Operation(summary = "API tao mới bạn đọc", description = "Mô tả chi tiếtAPI tạo mới bạn đọc")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Tạo mới bạn đọc thành công"),
            @ApiResponse(responseCode = "404", description = "Sai URL"),
            @ApiResponse(responseCode = "400", description = "Dữ lệu truyên vào trong body không đúng định dạng"),
            @ApiResponse(responseCode = "500", description = "Xử lý lưu dữ liệu có lỗi xảy ra"),
    })
    @PostMapping
    public ReaderResponse createReader(@RequestBody ReaderCreationRequest request) {
        return readerService.createReader(request);
    }

}
