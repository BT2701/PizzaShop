package com.example.demo.Controller;

import com.example.demo.Model.SanPham;
import com.example.demo.Repository.SanPhamRepo;
import com.example.demo.Service.SanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SanPhamCTL {
    @Autowired
    private SanPhamService service;

    @GetMapping("/api/productList")
    public List<Object[]> getAllProducts() {
        return service.getALL();
    }
    @GetMapping("/api/sanphamnoibac")
    public List<Object[]> danhSachSpNoiBac(@RequestParam("limit") int limit) {
        return service.danhSachSpNoiBac(limit);
    }

}
