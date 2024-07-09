package com.example.demo.Repository;

import com.example.demo.Model.KhachHang;
import com.example.demo.Model.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface KhachHangRepo extends JpaRepository<KhachHang, Integer> {
    @Query("select max (kh.makh) from khachhang kh")
    public Integer findMaxId();
}
