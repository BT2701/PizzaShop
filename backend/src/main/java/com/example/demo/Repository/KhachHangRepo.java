package com.example.demo.Repository;

import com.example.demo.Model.KhachHang;
import com.example.demo.Model.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KhachHangRepo extends JpaRepository<KhachHang, Integer> {
}
