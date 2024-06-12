package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Entity(name = "phieunhap")
@Data
public class PhieuNhap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MaPN")
    private Integer maPN;
    @Column(name = "MaNCC")
    private Integer maNCC;
    @Column(name = "MaNV")
    private Integer maNV;
    @Column(name = "NgayLap")
    private Timestamp ngayLap;
    @Column(name = "TongTien")
    private Long tongTien;
}
