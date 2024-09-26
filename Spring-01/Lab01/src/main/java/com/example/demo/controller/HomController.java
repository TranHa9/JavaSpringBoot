package com.example.demo.controller;

import com.example.demo.entity.Student;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HomController {
    @GetMapping
    public  String home(Model model){
        model.addAttribute("username", "Trần Văn A");
        return "helloWorld";
    }
    @GetMapping("/students")
    public  String getListStudents(Model model){
        List<Student> students = fakeData();
        model.addAttribute("danhSachSinhVien", students);
        return "students";
    }
    private List<Student> fakeData(){
        List<Student> students = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            Student student = new Student();
            student.setId(i);
            student.setName("Trần Văn " + i);
            student.setAddress("Hà Nội");
            student.setGpa(i);
            students.add(student);
        }
        return students;
    }
}
