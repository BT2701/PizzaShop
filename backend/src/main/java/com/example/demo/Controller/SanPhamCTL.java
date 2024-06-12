package com.example.demo.Controller;

import com.example.demo.Model.SanPham;
import com.example.demo.Repository.SanPhamRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SanPhamCTL {
    @Autowired
    private SanPhamRepo sanPhamRepo;

    @GetMapping("/api/productList")
    public List<SanPham> getAllProducts() {
        return sanPhamRepo.findAll();
    }

}
