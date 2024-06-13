package com.example.demo.Repository;

import com.example.demo.Model.PhieuNhap;
import com.example.demo.Model.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhieuNhapRepo extends JpaRepository<PhieuNhap, Integer> {
}
