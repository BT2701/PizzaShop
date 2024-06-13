package com.example.demo.Repository;

import com.example.demo.Model.HoaDon;
import com.example.demo.Model.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HoaDonRepo extends JpaRepository<HoaDon, Integer> {
}
