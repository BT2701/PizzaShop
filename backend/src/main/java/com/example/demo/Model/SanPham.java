package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name="sanpham")
@Data
public class SanPham {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer masp;
    @Column
    private String tensp;
    @Column
    private Integer maloai;
    @Column
    private Integer soluong;
    @Column
    private String donvitinh;
    @Column
    private String hinhanh;
    @Column
    private Integer dongia;

}
