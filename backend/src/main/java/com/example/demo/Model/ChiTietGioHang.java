package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "ctgiohang")
@Data
public class ChiTietGioHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "masp")
    private SanPham sanpham;
    @Column
    private Integer soluong;
}
