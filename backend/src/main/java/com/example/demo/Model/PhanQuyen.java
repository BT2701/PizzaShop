package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity(name="phanquyen")
@Data
public class PhanQuyen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer quyen;
    @Column
    private String tenquyen;
    @Column
    private Integer nhaphang;
    @Column
    private Integer sanpham;
    @Column
    private Integer nhanvien;
    @Column
    private Integer khachhang;
    @Column
    private Integer thongke;
    @JsonIgnore
    @OneToMany(mappedBy = "phanquyen")
    private List<TaiKhoan> taiKhoanList;

}
