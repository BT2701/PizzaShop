package com.example.demo.Service;

import com.example.demo.Model.SanPham;
import com.example.demo.Repository.SanPhamRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SanPhamService {
    @Autowired
    private SanPhamRepo repo;
    public List<SanPham> danhSachSpNoiBac(int limit) {
        List<SanPham> list = new ArrayList<>();
        for (int i = 0; i < limit; i++) {
            list.add((SanPham) repo.danhSachSpNoiBac().get(i)[0]);
        }
        return list;
    }
    public List<SanPham> getALL() {
        return repo.findAll();
    }
}
