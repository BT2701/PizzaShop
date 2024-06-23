package com.example.demo.Repository;

import com.example.demo.Model.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SanPhamRepo extends JpaRepository<SanPham, Integer> {
    @Query("SELECT s, SUM(ct.soluong) AS total " +
            "FROM sanpham s " +
            "JOIN cthoadon ct ON s.masp = ct.sanpham.masp " +
            "GROUP BY s.masp " +
            "ORDER BY total DESC")
    public List<Object[]> danhSachSpNoiBac();
    @Query("SELECT s, SUM(ct.soluong) AS total " +
            "FROM sanpham s " +
            "JOIN cthoadon ct ON s.masp = ct.sanpham.masp " +
            "GROUP BY s.masp " +
            "ORDER BY total ")
    public List<Object[]> getALL();
}
