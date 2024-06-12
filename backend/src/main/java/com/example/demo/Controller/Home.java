package com.example.demo.Controller;

import com.example.demo.Repository.SanPhamRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home")
public class Home {
    @Autowired
    private SanPhamRepo repo;

    @GetMapping
    public String home() {
        return "Hello World";
    }
    @GetMapping("/page1")
    public String page1(Model  model) {
        model.addAttribute("list", repo.findAll());
        return "page1";
    }

}
