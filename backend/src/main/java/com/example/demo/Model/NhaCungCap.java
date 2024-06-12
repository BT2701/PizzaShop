package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name="nhacungcap")
@Data
public class NhaCungCap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MaNCC")
    private Integer maNCC;
    @Column(name = "TenNCC")
    private String tenNCC;
    @Column(name = "DiaChi")
    private String diaChi;
    @Column(name = "DienThoai")
    private String dienThoai;
}
