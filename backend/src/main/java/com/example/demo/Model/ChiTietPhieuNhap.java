package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity(name="ctphieunhap")
@Data
public class ChiTietPhieuNhap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "mapn")
    private PhieuNhap phieunhap;
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
