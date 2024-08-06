package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity(name = "giohang")
@Data
public class GioHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer magh;
    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "makh")
    private KhachHang khachhang;
    @Column
    private Integer tongtien;
    @JsonIgnore // để tránh vòng lặp vô hạn khi lấy dữ liệu
    @OneToMany(mappedBy = "giohang")
    private List<ChiTietGioHang> chiTietGioHangList;
}
