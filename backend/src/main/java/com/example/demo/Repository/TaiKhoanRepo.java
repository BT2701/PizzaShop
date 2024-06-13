package com.example.demo.Repository;

import com.example.demo.Model.SanPham;
import com.example.demo.Model.TaiKhoan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaiKhoanRepo extends JpaRepository<TaiKhoan, Integer> {
}