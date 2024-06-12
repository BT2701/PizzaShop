package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "taikhoan")
@Data
public class TaiKhoan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "MaNV")
    private Integer maNV;
    @Column(name = "MatKhau")
    private String matKhau;
    @Column(name = "Quyen")
    private String quyen;
    @Column(name = "TrangThai")
    private Integer trangThai;
}
