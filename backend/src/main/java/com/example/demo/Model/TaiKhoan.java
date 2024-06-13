package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "taikhoan")
@Data
public class TaiKhoan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToOne
    @JoinColumn(name = "manv")
    private NhanVien nhanvien;
    @OneToOne
    @JoinColumn(name = "makh")
    private KhachHang khachhang;
    @Column
    private String matkhau;
    @ManyToOne
    @JoinColumn(name = "quyen")
    private PhanQuyen phanquyen;
    @Column
    private Integer trangthai;
}
