package com.example.demo.Repository;

import com.example.demo.Model.GiamGia;
import com.example.demo.Model.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GiamGiaRepo extends JpaRepository<GiamGia, Integer> {
}
