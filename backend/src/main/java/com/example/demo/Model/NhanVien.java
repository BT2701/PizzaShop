package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity(name="nhanvien")
@Data
public class NhanVien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer manv;
    @Column
    private String ho;
    @Column
    private String ten;
    @Column
    private String gioitinh;
    @Column
    private String chucvu;
    @JsonIgnore // để tránh vòng lặp vô hạn khi lấy dữ liệu
    @OneToMany(mappedBy = "nhanvien")
    private List<HoaDon> hoaDonList;
    @JsonIgnore // để tránh vòng lặp vô hạn khi lấy dữ liệu
    @OneToMany(mappedBy = "nhanvien")
    private List<PhieuNhap> phieuNhapList;
    @OneToOne(mappedBy = "nhanvien")
    private TaiKhoan taikhoan;

}
