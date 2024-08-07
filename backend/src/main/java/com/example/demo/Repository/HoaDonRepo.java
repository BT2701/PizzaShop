package com.example.demo.Repository;

import com.example.demo.Model.HoaDon;
import com.example.demo.Model.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HoaDonRepo extends JpaRepository<HoaDon, Integer> {
    @Query("select hd from hoadon hd where hd.khachhang.makh=:makh")
    public List<HoaDon> findByKH(@Param("makh") int makh);

    HoaDon findTopByOrderByMahdDesc();
}
