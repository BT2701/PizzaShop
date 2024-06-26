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
    public List<Object[]> getAllProducts(@RequestParam("currentPage") int currentPage,
                                         @RequestParam("productName") String productName,
                                         @RequestParam("productType") int productType,
                                         @RequestParam("priceRange") String priceRange) {
        return service.getALL(currentPage, productName, productType, priceRange);
    }
    @GetMapping("/api/sanphamnoibac")
    public List<Object[]> danhSachSpNoiBac(@RequestParam("limit") int limit) {
        return service.danhSachSpNoiBac(limit);
    }
    @GetMapping("/api/numOfProduct")
    public int getNumOfProduct() {
        return service.numOfProduct();
    }
    @GetMapping("/api/product")
    public SanPham getSanPham(@RequestParam("productId") int id) {
        return service.getById(id);
    }

}
