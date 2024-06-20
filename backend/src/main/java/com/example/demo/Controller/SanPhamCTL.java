package com.example.demo.Controller;

import com.example.demo.Model.SanPham;
import com.example.demo.Repository.SanPhamRepo;
import com.example.demo.Service.SanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SanPhamCTL {
    @Autowired
    private SanPhamService service;

    @GetMapping("/api/productList")
    public List<SanPham> getAllProducts() {
        return service.getALL();
    }
    @GetMapping("/api/sanphamnoibac")
    @CrossOrigin(origins = "http://localhost:3000/homepage")
    public List<SanPham> danhSachSpNoiBac() {
        return service.danhSachSpNoiBac();
    }

}
