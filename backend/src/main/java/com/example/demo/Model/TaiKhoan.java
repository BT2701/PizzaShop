package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "taikhoan")
@Data
public class TaiKhoan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private Integer manv;
    @Column
    private Integer makh;
    @Column
    private String matkhau;
    @Column
    private Integer quyen;
    @Column
    private Integer trangthai;
}
