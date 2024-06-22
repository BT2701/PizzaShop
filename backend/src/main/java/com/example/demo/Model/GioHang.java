package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "giohang")
@Data
public class GioHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @OneToOne
    @JoinColumn(name = "makh")
    private KhachHang khachhang;
    @Column
    private Integer tongtien;
}
