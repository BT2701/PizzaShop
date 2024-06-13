package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity(name="sanpham")
@Data
public class SanPham {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer masp;
    @Column
    private String tensp;
    @ManyToOne
    @JoinColumn(name = "maloai")
    private Loai loai;
    @Column
    private Integer soluong;
    @Column
    private String donvitinh;
    @Column
    private String hinhanh;
    @Column
    private Integer dongia;
    @JsonIgnore // để tránh vòng lặp vô hạn khi lấy dữ liệu
    @OneToMany(mappedBy = "sanpham")
    private List<ChiTietHoaDon> chiTietHoaDonList;
    @JsonIgnore // để tránh vòng lặp vô hạn khi lấy dữ liệu
    @OneToMany(mappedBy = "sanpham")
    private List<ChiTietPhieuNhap> chiTietPhieuNhapList;

}
