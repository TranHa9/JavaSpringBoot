package com.example.demopets.rest;

import com.example.demopets.model.request.AppointmentCreationRequest;
import com.example.demopets.model.request.EmailAppointmentRequest;
import com.example.demopets.model.response.AppointmentResponse;
import com.example.demopets.service.AppointmentService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/appointments")
@AllArgsConstructor
public class AppointmentResource {

    AppointmentService appointmentService;

    @GetMapping
    public List<AppointmentResponse> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }

    @GetMapping("/{id}")
    public AppointmentResponse getAppointmentById(@PathVariable long id) {
        return appointmentService.getDetail(id);
    }

    @PostMapping
    public AppointmentResponse createAppointment(@RequestBody @Valid AppointmentCreationRequest request) {
        return appointmentService.create(request);
    }

    @PutMapping("/approve/{id}")
    public AppointmentResponse approveAppointment(@PathVariable("id") long id, @Valid @RequestBody EmailAppointmentRequest request) {
        return appointmentService.approveAppointment(id, request);
    }

    @PutMapping("/reject/{id}")
    public AppointmentResponse rejectAppointment(@PathVariable("id") long id, @Valid @RequestBody EmailAppointmentRequest request) {
        return appointmentService.rejectAppointment(id, request);
    }

}
