package com.example.demo.Controller;

import com.example.demo.Repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class Home {
    @Autowired
    private StudentRepo repo;

    @GetMapping
    public String home() {
        return "Hello World";
    }
    @GetMapping("/page1")
    public String page1(Model  model) {
        model.addAttribute("list", repo.findStudentKhoa2());
        return "page1";
    }
}
