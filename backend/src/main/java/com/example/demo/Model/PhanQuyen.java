package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name="phanquyen")
@Data
public class PhanQuyen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Quyen")
    private String quyen;
    @Column(name = "NhapHang")
    private Integer nhapHang;
    @Column(name = "SanPham")
    private Integer sanPham;
    @Column(name = "NhanVien")
    private Integer nhanVien;
    @Column(name = "KhachHang")
    private Integer khachHang;
    @Column(name = "ThongKe")
    private Integer thongKe;

}
