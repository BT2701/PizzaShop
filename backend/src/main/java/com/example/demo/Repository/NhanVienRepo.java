package com.example.demo.Repository;

import com.example.demo.Model.NhanVien;
import com.example.demo.Model.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NhanVienRepo extends JpaRepository<NhanVien, Integer> {
}
