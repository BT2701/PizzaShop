package com.example.demo.Repository;

import com.example.demo.Model.GioHang;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface GioHangRepo extends JpaRepository<GioHang, Integer> {
    @Query("select gh from giohang gh where gh.khachhang.makh=:makh")
    public GioHang getGioHangByKH(@Param("makh") int kh);

}
