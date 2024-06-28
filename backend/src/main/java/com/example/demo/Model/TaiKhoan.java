package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "taikhoan")
@Data
public class TaiKhoan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "manv")
    @JsonIgnore
    private NhanVien nhanvien;

    @OneToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "makh")
    private KhachHang khachhang;
    @Column
    private String matkhau;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "quyen")
    private PhanQuyen phanquyen;
    @Column
    private Integer trangthai;
    @Column
    private String username;
}
