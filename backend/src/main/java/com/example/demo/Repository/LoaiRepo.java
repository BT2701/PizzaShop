package com.example.demo.Repository;

import com.example.demo.Model.Loai;
import com.example.demo.Model.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoaiRepo extends JpaRepository<Loai, Integer> {
}
