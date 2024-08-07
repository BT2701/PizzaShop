package com.example.demo.Repository;

import com.example.demo.Model.ChiTietGioHang;
import com.example.demo.Model.ChiTietHoaDon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChiTietGioHangRepo extends JpaRepository<ChiTietGioHang, Integer> {
    @Query("select ct from ctgiohang ct where ct.giohang.magh=:magh")
    public List<ChiTietGioHang> getList(@Param("magh") int cart);

    @Query("select ct from ctgiohang ct where ct.sanpham.masp=:masp")
    public ChiTietGioHang findBySP(@Param("masp") int sp);
}
