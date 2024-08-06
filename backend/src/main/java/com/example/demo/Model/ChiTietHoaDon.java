package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity(name="cthoadon")
@Data
public class ChiTietHoaDon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JsonIgnore // để tránh vòng lặp vô hạn khi lấy dữ liệu
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
