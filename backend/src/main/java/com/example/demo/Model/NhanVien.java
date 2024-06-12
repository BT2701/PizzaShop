package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name="nhanvien")
@Data
public class NhanVien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="MaNV")
    private Integer maNV;
    @Column(name = "Ho")
    private String ho;
    @Column(name = "Ten")
    private String ten;
    @Column(name = "GioiTinh")
    private String gioiTinh;
    @Column(name = "ChucVu")
    private String chucVu;
}
