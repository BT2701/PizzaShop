package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

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
}
