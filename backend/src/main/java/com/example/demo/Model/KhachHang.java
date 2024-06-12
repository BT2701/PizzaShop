package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name="khachhang")
@Data
public class KhachHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="MaKH")
    private Integer maKH;
    @Column(name="Ho")
    private String ho;
    @Column(name = "Ten")
    private String ten;
    @Column(name = "GioiTinh")
    private String gioiTinh;
    @Column(name = "TongChiTieu")
    private Long tongChiTieu;
    @Column(name = "TinhTrang")
    private Integer tinhTrang;
}
