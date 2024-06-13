package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name="cthoadon")
@Data
public class ChiTietHoaDon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "mahd")
    private HoaDon hoadon;
    @ManyToOne
    @JoinColumn(name = "masp")
    private SanPham sanpham;
    @Column
    private Integer soluong;
    @Column
    private Long dongia;
    @Column
    private Long thanhtien;

}
