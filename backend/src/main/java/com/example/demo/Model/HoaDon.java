package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Entity(name = "hoadon")
@Data
public class HoaDon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="MaHD")
    private Integer maHD;
    @Column(name="MaKH")
    private Integer maKH;
    @Column(name="MaNV")
    private Integer maNV;
    @Column(name = "NgayLap")
    private Timestamp ngayLap;
    @Column(name = "TongTien")
    private Long tongTien;
    @Column(name = "GhiChu")
    private String ghiChu;

}
