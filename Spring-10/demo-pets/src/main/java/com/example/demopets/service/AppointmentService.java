package com.example.demopets.service;

import com.example.demopets.constant.Status;
import com.example.demopets.entity.Appointment;
import com.example.demopets.exception.ObjectNotFoundException;
import com.example.demopets.model.request.AppointmentCreationRequest;
import com.example.demopets.model.request.EmailAppointmentRequest;
import com.example.demopets.model.response.AppointmentResponse;
import com.example.demopets.repository.AppointmentRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
//@AllArgsConstructor
public class AppointmentService {
    @Autowired
    AppointmentRepository appointmentRepository;
    @Autowired
    ObjectMapper objectMapper;

    JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    String from;

    public AppointmentService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public List<AppointmentResponse> getAllAppointments() {
        List<Appointment> appointments = appointmentRepository.findAll();
        return appointments.stream().map(appointment -> objectMapper.convertValue(appointment, AppointmentResponse.class)).toList();
    }

    public AppointmentResponse getDetail(long id) {
        Appointment appointment = appointmentRepository.findById(id).orElseThrow(() -> new ObjectNotFoundException("Không tìm thấy lịch khám với" + id));
        if (appointment == null) {
            return null;
        }
        return objectMapper.convertValue(appointment, AppointmentResponse.class);
    }

    public AppointmentResponse create(AppointmentCreationRequest request) {
        Appointment appointment = objectMapper.convertValue(request, Appointment.class);
        appointment.setCreatedTime(LocalDateTime.now());
        appointment.setStatus(Status.pending);
        appointment = appointmentRepository.save(appointment);
        return objectMapper.convertValue(appointment, AppointmentResponse.class);
    }

    public AppointmentResponse approveAppointment(Long id, EmailAppointmentRequest request) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy lịch khám với" + id));
        appointment.setStatus(Status.approved);
        appointment.setReviewedTime(LocalDateTime.now());
        appointment.setId(id);
        sendMail(request);
        return objectMapper.convertValue(appointmentRepository.save(appointment), AppointmentResponse.class);
    }

    public AppointmentResponse rejectAppointment(Long id, EmailAppointmentRequest request) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException("Không tìm thấy lịch khám với" + id));
        appointment.setStatus(Status.rejected);
        appointment.setReviewedTime(LocalDateTime.now());
        appointment.setId(id);
        sendMail(request);
        return objectMapper.convertValue(appointmentRepository.save(appointment), AppointmentResponse.class);
    }

    @Async
    public void sendMail(EmailAppointmentRequest request) {
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

        simpleMailMessage.setFrom(from);
        simpleMailMessage.setTo(request.getEmail());
        simpleMailMessage.setSubject("Thông báo lịch khám");
        simpleMailMessage.setText(request.getContent());

        javaMailSender.send(simpleMailMessage);
    }

}
