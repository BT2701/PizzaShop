package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity(name="khachhang")
@Data
public class KhachHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer makh;
    @Column
    private String ho;
    @Column
    private String ten;
    @Column
    private String gioitinh;
    @Column
    private Integer tongchitieu;
    @Column
    private Integer tinhtrang;
    @JsonIgnore // để tránh vòng lặp vô hạn khi lấy dữ liệu
    @OneToMany(mappedBy = "khachhang")
    private List<HoaDon> hoaDonList;
    @OneToOne(mappedBy = "khachhang",fetch = FetchType.LAZY)
    private TaiKhoan taikhoan;
    @OneToOne(mappedBy = "khachhang")
    private GioHang giohang;
    @Column
    private String email;
    @Column
    private String sdt;
}
