package com.example.demo.Repository;

import com.example.demo.Model.ChiTietHoaDon;
import com.example.demo.Model.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChiTietHoaDonRepo extends JpaRepository<ChiTietHoaDon, Integer> {
    @Query("select ct from cthoadon ct where ct.hoadon.mahd=:mahd")
    public List<ChiTietHoaDon> findByHD(@Param("mahd") int mahd);

}
