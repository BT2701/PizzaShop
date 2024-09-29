package com.example.demo.Controller;

import com.example.demo.Model.Loai;
import com.example.demo.Service.LoaiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin(origins = "https://bt2701.github.io/PizzaShop/", allowCredentials = "true")

public class LoaiCTL {
    @Autowired
    private LoaiService loaiService;
    @GetMapping("/api/loai")
    public List<Loai> getLoai() {
        return loaiService.getAllLoai();
    }
}
