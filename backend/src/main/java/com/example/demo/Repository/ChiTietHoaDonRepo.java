package com.example.demo.Repository;

import com.example.demo.Model.ChiTietHoaDon;
import com.example.demo.Model.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChiTietHoaDonRepo extends JpaRepository<ChiTietHoaDon, Integer> {
}
