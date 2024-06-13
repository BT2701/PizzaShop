package com.example.demo.Repository;

import com.example.demo.Model.PhanQuyen;
import com.example.demo.Model.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhanQuyenRepo extends JpaRepository<PhanQuyen, Integer> {
}
