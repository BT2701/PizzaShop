package com.example.demo.Controller;

import com.example.demo.Model.Student;
import com.example.demo.Repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentCTL {
    @Autowired
    private StudentRepo repo;

    @GetMapping("/api/students")
    public List<Student> getAll() {
        return repo.findAll();
    }
}
